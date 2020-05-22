// require all packages that we have

const express = require("express");         
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();  // run express

app.set('view engine', 'ejs'); // run ejs

const products = [];

app.use(bodyParser.urlencoded({extended: true})); // Know we can use body-parser options
app.use(express.static("public")); // That code allows us to use our static files like css

 
app.get('/', function(req, res){
    res.render('productList', {productsInfo: products});
});


app.get('/compose', function(req, res){
    res.render('productAdd');
});


app.post('/compose', function(req, res){
    const productInfo = {
      sku: req.body.sku,
      name: req.body.name,
      price: req.body.price,
      type: req.body.switch,
      parameters: {
          size: req.body.size,
          weight: req.body.weight,
          height: req.body.height,
          width: req.body.width,
          length: req.body.length
      }
    };
    products.push(productInfo);
    res.redirect('/');
});



// Connect to server

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
