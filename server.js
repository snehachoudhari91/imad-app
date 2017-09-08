var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
  var  articleone:{
    title:"article one",
    heading:"article one",
    content:"this is the article one"
},
var  articletwo:{
    title:"article two",
    heading:"article two",
    content:"this is the article two"
},
var  articlethree:{
    title:"article three",
    heading:"article three",
    content:"this is the article three"
} 
}

function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=
`
  <head>
         <link href="/ui/style.css" rel="stylesheet" />
        <title>
            ${title}
        </title>
        <style>
          
            
        </style>
  
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <h3>
           ${heading}
        </h3>
        <div>
            <p>
          ${content}
            </p>
        </div>
     </div>   
    </body>
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
res.send(createtemplate(articleone));
});
app.get('/article-two', function (req, res) {
  res.send(createtemplate(articletwo));
});
app.get('/article-three', function (req, res) {
res.send(createtemplate(articlethree));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
