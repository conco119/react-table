var express = require('express');

var app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));

app.listen(3000,()=> {
	console.log("Chạy rồi ");
})

app.get('/',function(req,res) {
	res.render('home');
})
