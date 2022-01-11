const db=require('../models')

const User=db.users

// saving the data to collection
exports.create=(req,res)=>{

    console.log(req.body);

    const user=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        city:req.body.city

    })
  
    // from mongoose
    user.save(user)
    .then(data=>{
        if (!data){
            res.send({message:'Fail'})
        }else{
        res.send({status:201,message:'Success!!!'})}
    }
    )

}
   // fetching all the data

exports.findAll = (req,res)=>{
    User.find()
    .then(data=>{
        res.send(data)
    })
}

exports.getSingleUser = (req,res)=>{
    const userId = req.params.id
    console.log(userId)
    User.findOne({_id:userId})
    .then(data=>{
        res.send(data)
    })
}