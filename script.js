function showDetails(cardNumber) {
        const newPage = window.open("", "_blank");
        newPage.document.write(`
            <html>
                <head>
                    <title>Card ${cardNumber} Details</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #998e8e;
                            padding: 20px;
                            margin: 0;
                        }
                        .card-details {
                           background-color: #fcfacf;
                            padding: 20px;
                            border-radius: 8px;
                            border: 2px solid #1b1a1a;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            text-align: center;
                        }
                        button {
                            margin-top: 20px;
                            padding: 10px 20px;
                            font-size: 16px;
                            background-color: rgb(251, 253, 253);
                            color: black;
                            border: 2px solid #1b1a1a;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                        button:hover {
                            background-color: black;
                            color:white;
                        }
                    </style>
                </head>
                <body>
                    <div class="card-details">
                        <h2> Card ${cardNumber} Details</h2>
                        <p>This is the detailed content of Card ${cardNumber}.</p>
                        <button onclick="window.location.href='index.html'">Back to cards</button>
                    </div>
                </body>
            </html>
        `);
    }
    