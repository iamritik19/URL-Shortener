const express=require('express');
const app=express();
const port=3000;
app.use('/url',urlRoute);
app.listen(port,()=>{
    console.log(`server started at port: ${port}`);
});