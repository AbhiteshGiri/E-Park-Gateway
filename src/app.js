const express=require("express");
const app=express();
const path=require("path");
const port=8000;

app.use(express.static(path.join(__dirname,"../public")));
app.get('/',(req,res)=>{
    res.send("serving the project E Park Gateway from Express server");
});
app.listen(port,()=>{
    console.log(`Listening on port number ${port}`)
})