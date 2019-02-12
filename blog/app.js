const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4001;

mongoose.connect('mongodb://localhost:27017/blogPost', {useNewUrlParser: true}, (err, connect)=>{
  if(err){
    console.log("err:", err)
  }else console.log("connect to mongoDB")
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/static', express.static(path.join(__dirname, '/')))

 app.set('views', path.join(__dirname, './server/views'));
 app.set('view engine', 'ejs');
 app.use(cors());


 // middlware for webpack
if(process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware')
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}


app.use(require('./server/routes/route'));
// app.use(require('./server/routes/api'))

































app.listen(port, ()=> {
	console.log(`listning on ${port}`)
})
