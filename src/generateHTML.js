const fs = require('fs');

const generateHTML = (cardSection) => {
    const boilerplateTop = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- Bootstrap CSS CDN Link -->
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    </head>
    <body>`;
        
    const boilerplateBottom = `<!-- Bootstrap JS CDN Link -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    </body>
    </html>`;

    return boilerplateTop + cardSection + boilerplateBottom;
};

module.exports = generateHTML;