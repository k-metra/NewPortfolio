<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>New Contact Message</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.5;
                color: #333;
                background-color: #f9f9f9;
                margin: 0;
                padding: 20px;
            }

            .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e0e0e0;
            }

            h2 {
                color: #2c3e50;
            }

            p {
                margin: 10px 0;
            }

            .label {
                font-weight: bold;
            }

            .message {
                background-color: #f1f1f1;
                padding: 10px;
                border-radius: 6px;
            }

            .header {
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-bottom: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Message from K-Metra Contact Form</h2>
                <img src="https://i.imgur.com/2HZrZOS.png" alt="K-Metra Logo" height="50">
            </div>
            <p><span class="label">Name:</span> {{ $formData['name'] }}</p>
            <p><span class="label">Email:</span> {{ $formData['email'] }}</p>
            <p><span class="label">Message:</span></p>
            
            <div class="message">
                {{ $formData['message'] }}
            </div>  
        </div>
    </body>
</html>