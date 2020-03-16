<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\RegistrationFormRequest;
use App\Mail\ForgotPassword;
use App\Mail\Verify;
use App\Models\ForgotPassword as AppForgotPassword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Validator;

class APIController extends Controller
{
    public $loginAfterSignUp = true;
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
        } else {
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
    public function logout(Request $request)
    {
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
    public function getProductService()
    {
        $res = file_get_contents("https://844672ed6d0f31d8ad2fb844a0636e80:c4e4a2414eed48ff01f4355382e19bd3@beauty-lab-merch.myshopify.com/admin/api/2020-01/products.json");
        return $res;
    }
    public function sendEmail(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input, [
            'email' => 'required|email'
        ]);

        if ($validation->fails()) {
            return response()->json([
                'ok' => false,
                'message' => $validation->errors()->first()
            ]);
        } else {
            $user = User::where('email', $input['email'])->first();
            if ($user !== null) {
                $token = str_shuffle("abcdefghijklmnopqrstuvwxyz0123456789" . uniqid());
                $data = AppForgotPassword::create([
                    'id_usuario' => $user->id,
                    'token' => $token,
                ]);

                Mail::to($user->email)->send(new ForgotPassword($data));

                return response()->json([
                    'ok' => true,
                    'message' => 'We will send an email with the steps so you can change your password',
                ]);
            } else {
                return response()->json([
                    'ok' => false,
                    'message' => 'This email is not found in our users'
                ]);
            }
        }
    }
    public function changePassword($token)
    {
        $search = AppForgotPassword::where('token', $token)->first();
        $message = '';
        $id = '';
        if ($search === null) {
            $message = 'This authentication token is not found';
        } else {
            $carbon = new \Carbon\Carbon();
            $date = $carbon->now()->format('Y-m-d');
            if ($date === $search->created_at->format('Y-m-d')) {
                $id = $search->user->id;
                $message = 'Enter a new password';
            } else {
                $message = 'This token has expired';
            }
            
        }
        return view('password.forgotPassword',compact(['message','id']));
    }
    public function changePasswordJs($id)
    {
        return response()->json("Message $id ");
    }
}
