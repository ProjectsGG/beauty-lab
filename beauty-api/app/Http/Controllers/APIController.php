<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;
use Illuminate\Support\Facades\Auth;
use Validator;
class APIController extends Controller
{
    /**
     * @var bool
     */
    public $loginAfterSignUp = true;
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $input = $request->only('email', 'password');
        $token = null;
        if (!$token = JWTAuth::attempt($input)) {
            return response()->json([
                'ok' => false,
                'message' => 'Invalid Email or Password',
            ]);
        }
        $user = User::where('email',$request->all()['email'])->first();

        return response()->json([
            'ok' => true,
            'message' => "Welcome to beautylab!",
            'user' => $user,
            'token' => $token
        ]);
    }

    public function refresh()
   {
       return $this->respondWithToken(auth()->refresh());
   }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function logout(Request $request)
    {   
        // dd($request->all());
        $this->validate($request, [
            'token' => 'required'
        ]);

        try {
            JWTAuth::invalidate($request->token);

            return response()->json([
                'ok' => true,
                'message' => 'User logged out successfully'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'ok' => false,
                'message' => 'Sorry, the user cannot be logged out'
            ], 500);
        }
    }

    /**
     * @param RegistrationFormRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input,[
            'nombres' => 'required|string',
            'movil' => 'required|string',
            'email' => 'required|email|unique:usuarios',
            'password' => 'required|string|min:6|max:10'
        ])->setAttributeNames([
            'nombres' => 'name',
            'movil' => 'phone',
            'email' => 'email',
            'password' => 'password'
        ]);

        if($validation->fails()){
            return response()->json([
                'ok'=>false,
                'errors'=>$validation->errors()
            ]);
        }else{
            $user = new User();
            $user->nombres = $request->nombres;
            $user->movil = $request->movil;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->save();

            if ($this->loginAfterSignUp) {
                return $this->login($request);
            }

            return response()->json([
                'ok'   =>  true,
                'data'      =>  $user
            ], 200);
        }
    }
}
