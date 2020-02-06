const answers = require('../app');

function generateHTML(answers) { 
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
      </style>
      </head>
      <body>  
        <div class="card text-white bg-danger mb-3 dif1">
            <div class="card-header">${this.name}</div>
                <div class="card-body">
                    <h5 class="card-text"> Photo corresponding to title + ${this.title}</h5>
                    <p class="card-text surround">ID: ${this.id}</p>
                    <p class="card-text surround">Email: ${this.email}</p>
                    <p class="card-text surround">If title=manager, office # here, if engineer, github with linked username, if intern, school</p>
                </div>
            </div>
        <div class="card text-white bg-secondary mb-3">
        <div class="card-header">${answers.name}</div>
        <div class="card-body">
            <h5 class="card-text">Insert photo associated w/title here + ${answers.title}</h5>
            <p class="card-text surround">ID: ${answers.id}</p>
            <p class="card-text surround">Email: ${answers.email}</p>
            <p class="card-text surround">If title=manager, office # here, if engineer, github with linked username, if intern, school</p>
        </div>
            </div>
        <div class="card text-white bg-success mb-3">
        <div class="card-header">${answers.name}</div>
        <div class="card-body">
            <h5 class="card-text">Insert photo associated w/title here + ${answers.title}</h5>
            <p class="card-text surround">ID: ${answers.id}</p>
            <p class="card-text surround">Email: ${answers.email}</p>
            <p class="card-text surround">If title=manager, office # here, if engineer, github with linked username, if intern, school</p>
        </div>
            </div>
            <br>
        <div class="card text-white bg-warning mb-3 sep2">
        <div class="card-header">${answers.name}</div>
        <div class="card-body">
            <h5 class="card-text">Insert photo associated w/title here + ${answers.title}</h5>
            <p class="card-text surround">ID: ${answers.id}</p>
            <p class="card-text surround">Email: ${answers.email}</p>
            <p class="card-text surround">If title=manager, office # here, if engineer, github with linked username, if intern, school</p>
        </div>
            </div>
        <div class="card text-white bg-info mb-3">
        <div class="card-header">${answers.name}</div>
        <div class="card-body">
            <h5 class="card-text">Insert photo associated w/title here + ${answers.title}</h5>
            <p class="card-text surround">ID: ${answers.id}</p>
            <p class="card-text surround">Email: ${answers.email}</p>
            <p class="card-text surround">If title=manager, office # here, if engineer, github with linked username, if intern, school</p>
        </div>
            </div>
        </body>
        </html>`
    }

    module.exports = generateHTML;
