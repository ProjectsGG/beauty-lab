<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\imagesXblog;
use App\Models\Like;
use Carbon\Carbon;
use Illuminate\Http\Request;
use JWTAuth;
use Illuminate\Support\Facades\Storage;
class BlogController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }
    public function index()
    {
        $blogs = Blog::orderBy('id','DESC')->with(['images','user','comments.user','likes.user'])->withCount('likes')->get();
        
        return response()->json([
            'ok' => true,
            'data' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    public function like($blog)
    {
        $blog = Blog::find($blog);
        $like = Like::where('id_usuario', $this->user->id)->where('id_blog', $blog->id)->first();
        if ($like == null) {
            Like::create([
                'id_usuario' => $this->user->id,
                'id_blog' => $blog->id
            ]);
            return response()->json([
                'ok' => true,
                'message' => 'liked'
            ]);
        } else {
            $like->delete();
            return response()->json([
                'ok' => true,
                'message' => 'disliked'
            ]); 
        }
    }
    public function store(Request $request)
    {
        try {
            $input = $request->all();

            $now = new \DateTime();
            $input['id_usuario'] = $this->user->id;
            $input['fecha'] = $now->format('Y-m-d');
            $input['hora'] = Carbon::now()->format('h:m:s');
            $blog = Blog::create($input);
            foreach ($input['photos'] as $key => $value) {
    
                $img = $this->getB64Image($value);
                $img_extension = $this->getB64Extension($value);
    
                $img_name = $this->user->id . '-user-image-'. $key . time() . '.' . $img_extension;
    
                Storage::disk('blog')->put($img_name, $img);
    
                $images = new imagesXblog();
                $images->id_blog = $blog->id;
                $images->imagen = $img_name;
                $images->save();
            }
            return response()->json([
                'ok' => true,
                'message' => 'Post upload succesfully'
            ]);   
        } catch (\Throwable $th) {
            return response()->json([
                'ok' => false,
                'error' => $th->getMessage()
            ]);
        }
        
        // return response()->json($input);
    }

    public function getB64Image($base64_image)
    {
        // Obtener el String base-64 de los datos         
        $image_service_str = substr($base64_image, strpos($base64_image, ",") + 1);
        // Decodificar ese string y devolver los datos de la imagen        
        $image = base64_decode($image_service_str);
        // Retornamos el string decodificado
        return $image;
    }
    public function getB64Extension($base64_image, $full = null)
    {
        // Obtener mediante una expresión regular la extensión imagen y guardarla
        // en la variable "img_extension"        
        preg_match("/^data:image\/(.*);base64/i", $base64_image, $img_extension);
        // Dependiendo si se pide la extensión completa o no retornar el arreglo con
        // los datos de la extensión en la posición 0 - 1
        return ($full) ?  $img_extension[0] : $img_extension[1];
    }
    public function show($id)
    {
        //
    }
    public function edit($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        //
    }
    public function destroy($id)
    {
        //
    }
}
