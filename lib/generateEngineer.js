const answers = require('../app');

function generateEngineer(engineer) { 
    console.log(engineer);
return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <title>Document</title>
      <style>
        .card {
            display:inline-block;
            width: 200px;
            height: 255px;
        }
        .surround {
            border: 1px solid black;
        }
        .card-text {
            font-size: 12px;
        }
        .sep2 {
            margin-left: 80px;
        }
        #glasses {
            height: 60px;
            width: 60px;
        }
      </style>
      </head>
      <body>  
        <div class="card text-white bg-danger mb-3 dif1">
            <div class="card-header">${engineer.name}</div>
                <div class="card-body">
                    <h5 class="card-text"> <img id="glasses" src="../images/glasses.png"> ${engineer.title}</h5>
                    <p class="card-text surround">ID: ${engineer.id}</p>
                    <p class="card-text surround">Email: ${engineer.email}</p>
                    <p class="card-text surround">GitHub: ${engineer.github}</p>
                </div>
            </div>          
        </body>
        </html>`
    }

    module.exports = generateEngineer;
