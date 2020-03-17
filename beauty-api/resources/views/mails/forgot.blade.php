<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>Welcome to beautylab</title>
</head>
<body style="font-family: 'lato', sans-serif;
-webkit-font-smoothing: antialiased;
background: #fff;
padding: 0;
margin: 0;
height: 100vh;">
    <div style="display: flex;
    flex-wrap: nowrap;
    margin: 40px auto;
    width: 500px;">
        <div style="
        -webkit-box-shadow: -1px 3px 33px 0px rgba(0,0,0,0.54);
        -moz-box-shadow: -1px 3px 33px 0px rgba(0,0,0,0.54);
        box-shadow: -1px 3px 33px 0px rgba(0,0,0,0.54);
        background: #fff;
        border-radius: 40px;
        border: #ff5ae9 2px solid;
        box-shadow: 0 1px 1px rgba(0,0,0,0);
        flex: 1;
        margin: 8px;
        padding: 30px;
        position: relative;
        text-align: center;
        transition: all 0.5s ease-in-out;
        margin-top: -10px;
                margin-bottom: -10px; " class="card popular">
            <div class="card-title">
                <h3 style=" color: #ff5ae9;
                font-size: 18px;
                text-transform: uppercase;">You have made a request to change your password</h3>
                <h4 style="color: rgba(0,0,0,0.6);">{{$data->user->nombres}}, to change your password and recover your account click on the following button.</h4>
            </div>
            <br>
            <div class="card-action">
                <a href="{{$URL}}"
                class="m_-3268472636288069364button m_-3268472636288069364button-primary" role="button" style="cursor: pointer;
                text-decoration: 
                none;
                margin: 0 auto;
                background: #ff00de;
                border: 2px solid #ff00de;
                border-radius: 30px;
                color: #fff;
                cursor: pointer;
                display: block;
                font-size: 15px;
                font-weight: bold;
                padding: 20px;
                width: 60%;
                text-transform: uppercase;
                transition: all 0.3s ease-in-out;">Go retrieve my password</a>
            </div>
            <br>
            <p class="color:gray;
            font-size: 13px;
            text-align:center;">If you didn't apply ignore this message</p>
        </div>
    </div>
    
    <p style="color:gray;
            font-size: 13px;
            text-align:center;">If the button fail, copy and paste this link in your browser <a href="{{$URL}}" class="m_-3268472636288069364button m_-3268472636288069364button-primary" style="text-decoration:underline; color: #8c79f5; cursor: pointer;" href="">link</a> .</p>
    
    <p style="color:gray;
            font-size: 13px;
            text-align:center;">This email was automatically sent by Beautylab, please do not reply.</p>
</body>
</html>