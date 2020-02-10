<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>Welcome to beautylab</title>
    <style>
        @import url(https://fonts.googleapis.com/css?family=Lato:700);

        body {
            font-family: 'lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            background: #ffe4fe;
            padding: 0;
            margin: 0;
            height: 100vh;
        }

        .wrapper-card {
            display: flex;
            flex-wrap: nowrap;
            margin: 40px auto;
            width: 50%;
        }
        .card {
            background: #fff;
            border-radius: 40px;
            border: #da9bd8 1px solid;
            box-shadow: 0 1px 1px rgba(0,0,0,0);
            flex: 1;
            margin: 8px;
            padding: 30px;
            position: relative;
            text-align: center;
            transition: all 0.5s ease-in-out;
            &.popular {
                margin-top: -10px;
                margin-bottom: -10px; 
                .card-title {
                    h3 {
                        color: #ff5ae9;
                        font-size: 22px;
                    }
                }
                .card-price {
                    margin: 50px;
                    h1 {
                        color: #ff00de;
                        font-size: 60px;
                    }
                }
                .card-action {
                    button {
                        background-color: #ff5ae9;
                        border-radius: 80px;
                        color: #fff;
                        font-size: 17px;
                        margin-top: -15px;
                        padding: 15px;
                        height: 80px;
                    }
                }
            }
        }

        .card-title {
            h3 {
                color: rgba(0,0,0,0.3);
                font-size: 15px;
                text-transform: uppercase;
            }
            h4 {
                color: rgba(0,0,0,0.6);
            }
        }
        .card-price {
            margin: 60px 0;
            h1 {
                font-size: 46px;
                sup{
                    font-size: 15px;
                    display: inline-block;
                    margin-left: -20px;
                    width: 10px;
                }
                small {
                    color: rgba(0,0,0,0.3);
                    display: block;
                    font-size: 11px;
                    text-transform: uppercase;
                }
            }
        }
        .card-description {
            ul {
                display: block;
                list-style: none;
                margin: 60px 0;
                padding: 0;
            }
            li {
                color: rgba(0,0,0,0.6);
                font-size: 15px;
                margin: 0 0 15px;
                &::before {
                    font-family: FontAwesome;
                    content: "\f00c";
                    padding: 0 5px 0 0;
                    color: rgba(0,0,0,0.15);
                }
            }
        }
        .card-action {
            a {
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
                transition: all 0.3s ease-in-out;
            }
        }
        .beauty-rem{
            color:gray;
            font-size: 13px;
            text-align:center;
        }
    </style>
</head>
<body style="font-family: 'lato', sans-serif;
-webkit-font-smoothing: antialiased;
background: #ffe4fe;
padding: 0;
margin: 0;
height: 100vh;">
    <div style="display: flex;
    flex-wrap: nowrap;
    margin: 40px auto;
    width: 50%;">
        <div style="background: #fff;
        border-radius: 40px;
        border: #da9bd8 1px solid;
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
                font-size: 22px;
                color: rgba(0,0,0,0.3);
                font-size: 15px;
                text-transform: uppercase;">Welcome to the beautylab family!</h3>
                <h4 style="color: rgba(0,0,0,0.6);">Your registration is almost ready, please click on the button to confirm your account.</h4>
            </div>
            <br>
            <div class="card-action">
                <a role="button" style="margin: 0 auto;
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
                transition: all 0.3s ease-in-out;">Confirm my account</a>
            </div>
            <br>
            <p class="color:gray;
            font-size: 13px;
            text-align:center;">If you didn't apply ignore this message</p>
        </div>
    </div>
    
    <p style="color:gray;
            font-size: 13px;
            text-align:center;">If the button fail, copy and paste this link in your browser <a href="">link</a> .</p>
    
    <p style="color:gray;
            font-size: 13px;
            text-align:center;">This email was automatically sent by Beautylab, please do not reply.</p>
</body>
</html>