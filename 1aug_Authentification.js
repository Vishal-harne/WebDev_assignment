

const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const jwtpassword="123456";
app.use(express.json());


const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];

  function userExist(username,password){
    let userExist=false;
   for(let i=0;i<ALL_USERS.length;i++ ){
      if(ALL_USERS[i].username==username  && ALL_USERS[i].password==password){
       userExist=true;
      }
   }
   return userExist;
  }

  app.post("/Signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExist(username,password)){
        res.json({
            msg:"user does not exist in the memory DB"
        })
    };
    var token=jwt.sign({username:username},jwtpassword);

   return  res.json({
        token,
    })
  });


  app.get("/users",function(req,res){
     const token=req.headers.authorization;
     const decoded=jwt.verify(token ,jwtpassword);
     const username=decoded.username;
     res.json({
        users: ALL_USERS.filter(function(value) {
            if (value.username == username) {
              return false
            } else {
              return true;
            }
     } )
  })
})


  app.listen(3007);
