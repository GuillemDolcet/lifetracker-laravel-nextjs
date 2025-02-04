<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Password Reset Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are the default lines which match reasons
    | that are given by the password broker for a password update attempt
    | outcome such as failure due to an invalid password / reset token.
    |
    */

    'reset' => [
        'message' => 'Your password has been reset.',
        'code' => 'password_reset_successful',
    ],
    'sent' => [
        'message' => 'We have emailed your password reset link.',
        'code' => 'password_reset_link_sent',
    ],
    'throttled' => [
        'message' => 'Please wait before retrying.',
        'code' => 'wait_before_retrying',
    ],
    'token' => [
        'message' => 'This password reset token is invalid.',
        'code' => 'invalid_password_reset_token',
    ],
    'user' => [
        'message' => "We can't find a user with that email address.",
        'code' => 'user_not_found_with_email',
    ],

];
