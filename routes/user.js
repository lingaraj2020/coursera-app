const { Router} = require("express");
const { usermodel } = require("../db");

const userRouter=Router();

userRouter.post("/signup",(req,res)=>{
    res.json({
        message:"user signup endpoint"
    })
})
userRouter.post("/signin",(req,res)=>{
    res.json({
        message:"user signin endpoint"
    })
})
userRouter.get("/purchase",(req,res)=>{
    res.json({
        message:"user purchase endpoint"
    })
})

module.exports={
    userRouter:userRouter
}