<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;
use App\Mail\Verify;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
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
        $user = User::where('email', $request->all()['email'])->first();
        if ($user != null) {
            //if ($user->verify == 1) {
                $token = null;
                if (!$token = JWTAuth::attempt($input)) {
                    return response()->json([
                        'ok' => false,
                        'message' => 'Invalid Email or Password',
                    ]);
                }
                return response()->json([
                    'ok' => true,
                    'message' => "Welcome to beautylab!",
                    'user' => $user,
                    'token' => $token
                ]);
           /* } else {
                return response()->json([
                    'ok' => false,
                    'message' => 'This account is not verified'
                ]);
            }*/
        }else {
            return response()->json([
                'ok' => false,
                'message' => 'Invalid Email or Password',
            ]);
        }
    }

    public function refresh()
    {
        $token = JWTAuth::getToken();
        $new_token = JWTAuth::refresh($token);
        return response()->json([
            'new_token' => $new_token
        ]);
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
        try {
            $input = $request->all();

            $validation = Validator::make($input, [
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

            if ($validation->fails()) {
                return response()->json([
                    'ok' => false,
                    'error' => $validation->errors()->first()
                ]);
            } else {
                $user = new User();
                $user->nombres = $request->nombres;
                $user->movil = $request->movil;
                $user->email = $request->email;
                $user->password = bcrypt($request->password);
                $user->verify_token = str_shuffle("abcdefghijklmnopqrstuvwxyz0123456789" . uniqid());
                $user->save();

                Mail::to($user->email)->send(new Verify($user));

                // if ($this->loginAfterSignUp) {
                //     return $this->login($request);
                // }

                return response()->json([
                    'ok' =>  true,
                    'message' => "Please check your email to confirm it's you",
                    'data' =>  $user
                ], 200);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'ok' => false,
                'error' => $th->getMessage()
            ]);
        }
    }
    public function me()
    {
        return response()->json($this->guard()->user());
    }
    public function guard()
    {
        return Auth::guard();
    }
    public function verify($token)
    {
        $user = User::where('verify_token', $token)->first();
        $message = '';
        if ($user != null) {
            if ($user->verify == 1) {
                $message = 'This account has already been verified.';
            } else {
                $user->update(['verify' => 1]);
                $message = 'Account verified successfully, now you can enter the application';
            }
        } else {
            $message = 'Could not find this account';
        }
        return view('auth.verify', compact('message'));
    }

    public function getProductService(){
        $res = file_get_contents("https://844672ed6d0f31d8ad2fb844a0636e80:c4e4a2414eed48ff01f4355382e19bd3@beauty-lab-merch.myshopify.com/admin/api/2020-01/products.json");
        return $res;
    }
}
