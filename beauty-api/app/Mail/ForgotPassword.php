<?php

namespace App\Mail;

use App\Models\ForgotPassword as AppForgotPassword;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgotPassword extends Mailable
{
    use Queueable, SerializesModels;
    public $data;
    public $URL;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(AppForgotPassword $data)
    {
        $this->data = $data;
        $this->URL = config ('app.url')."/forgot/$data->token";
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mails.forgot');
    }
}
