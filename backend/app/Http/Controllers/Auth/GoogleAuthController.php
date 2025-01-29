<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class GoogleAuthController extends Controller
{
    public function handleGoogleLogin(Request $request): \Illuminate\Http\Response
    {
        // Obtener el token enviado desde el frontend
        $token = $request->token;

        // Obtener los datos del usuario de Google usando el token
        try {
            $googleUser = Socialite::driver('google')->userFromToken($token);

            // Verificar si el usuario existe en la base de datos
            $user = User::firstOrCreate(
                ['email' => $googleUser->getEmail()],
                [
                    'name' => $googleUser->getName(),
                    'username' => $googleUser->getEmail(), // O puedes crear uno de alguna otra forma
                    'google_id' => $googleUser->getId(),
                ]
            );

            // Loguear al usuario
            Auth::login($user);

            // Retornar la respuesta con el usuario autenticado
            return response()->noContent();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al autenticar el token con Google'], 400);
        }
    }
}
