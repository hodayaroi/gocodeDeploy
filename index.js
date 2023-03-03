import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const {PORT,DB_USER,DB_PASS,DB_HOST,DB_NAME}=process.env
const app = express();

mongoose.set('strictQuery', false);
app.use(express.json());
app.use(express.static("client/build"))
 
const todoSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  isDone:{
    type: Boolean,
    default:false
  },
  dateCreated:{
    type: Date,
    default: Date.now()
  }
});

const productSchema = new mongoose.Schema({
  price:{
    type: Number,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  img:{
    type:String,
    required:true
  },
  dateCreated:{
    type:Date,
    default:Date.now()
  },
  category:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
});

const Todo = mongoose.model('Todo', todoSchema);
const Product = mongoose.model('Product', productSchema);

app.get("/api/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.send(product);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});
app.post("/api/addProduct", async (req, res) => {
  try{
    const productTitle = { ...req.body };
    const createdProduct= new Product(productTitle)
    await createdProduct.save()
    res.send(createdProduct);

  }catch(e){
    console.log(e)
    res.status(500).send(e.message)
  }
});


// mongoose.connect("mongodb://127.0.0.1:27017/product", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//mongodb+srv://hodayaroi:<password>@cluster0.qds6shn.mongodb.net/test
app.get("*",(req,res)=>{
  res.sendFile(__dirname,"/client/gocode-shop/build/index.html")
});

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true$w=majority`,
  {userNewUrlParser:true,useUnifiedTopology: true},
  (err)=>{
    app.listen(PORT||9000,()=>{
      console.log("err",err);
      console.log("listen")
    })
  }
)


