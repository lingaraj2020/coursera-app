const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=Schema.Types.ObjectId;

const userSchema=new Schema({
    userName:{
        type:String,
        unique:true
    },
    password:String,
    firstName:String,
    lastName:String
})

const adminSchema=new Schema({
    userName:{
        type:String,
        unique:true
    },
    password:String,
    firstName:String,
    lastName:String

})

const courseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})

const purchaseSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId
})

const usermodel=mongoose.model("user",userSchema);
const adminmodel=mongoose.model("admin",adminSchema);
const coursemodel=mongoose.model("course",courseSchema);
const purchasemodel=mongoose.model("purchase",purchaseSchema);

module.exports={
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}