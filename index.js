const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{ type: 'input', message: 'What is your name?', name: 'name' }, { type: 'input', message: 'Where are you located?', name: 'location' }, { type: 'input', message: 'Write a short bio about yourself:', name: 'bio' }, { type: 'input', message: 'What is your LinkedIn URL?', name: 'linkedin' }, { type: 'input', message: 'What is your Github URL?', name: 'github' }])
    .then((answers) => {
        const html = `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>${answers.name}'s Portfolio</title>
              <style>
                body {
                  background-color: #f9f9f9;
                  font-family: Arial, sans-serif;
                  color: #333;
                  margin: 0;
                  padding: 0;
                }
                .container {
                  max-width: 800px;
                  margin: 0 auto;
                  padding: 20px;
                  box-sizing: border-box;
                  background-color: #fff;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }
                h1 {
                  font-size: 36px;
                  margin-bottom: 10px;
                }
                h2 {
                  font-size: 24px;
                  margin-bottom: 10px;
                }
                p {
                  font-size: 18px;
                  margin-bottom: 20px;
                }
                ul {
                  margin: 0;
                  padding: 0;
                  list-style-type: none;
                }
                li {
                  margin-bottom: 10px;
                }
                a {
                  color: #333;
                  text-decoration: none;
                  font-weight: bold;
                }
                a:hover {
                  color: #000;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>${answers.name}</h1>
                <h2>${answers.location}</h2>
                <p>${answers.bio}</p>
                <ul>
                  <li><a href="${answers.linkedin}">LinkedIn</a></li>
                  <li><a href="${answers.github}">Github</a></li>
                </ul>
              </div>
            </body>
          </html>`;
    
        fs.writeFile('index.html', html, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log('Success!');
          }
        });
      });