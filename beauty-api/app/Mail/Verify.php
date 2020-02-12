<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Verify extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    public $URL;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $data)
    {
        $this->data = $data;
        $this->URL = config ('app.url')."/verify/$data->verify_token";
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mails.verify');
    }
}
