import path from 'path';
import express from 'express';
import ejs from 'ejs';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import router from './Routes/productroutes.js';

const app=express();
const PORT=8082;
const __dirname = path.resolve();

const apiKey='mongodb://0.0.0.0:27017/hello_web';
mongoose.connect(apiKey, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Successfully Connected to mongodb");
  })
  .catch((error) => {
    console.log("Error:", error);
  });


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}.`);
});
app.set('view engine', 'ejs');

app.get('/products.htm',async(req,res)=>{
    res.render('../dashboard', {
        messageText : "Hi",
      })
});
app.get('/admin/dashboard.htm',async(req,res)=>{
    res.render('../admin/dashboard', {
        messageText : "Hi",
      })
});

app.get('/components.css',async(req,res)=>{
    res.sendFile(path.join(__dirname,'./components.css'))
});

app.get('/images/*',async(req,res)=>{
    res.sendFile(path.join(__dirname, req.url));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/admin',router);
app.use('/admin',router);