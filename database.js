const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("Connection Ho Gaya")})
    .catch((err)=>{
        console.log("nhi hua Connection");
        console.error(err.messages);
        process.exit(1);
    })
}
module.exports=dbConnect;