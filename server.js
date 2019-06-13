exp=require('express');
app=exp();
app.listen(1000);
bp=require("body-parser");
app.use(bp.json());
monjs=require('mongojs');
con=monjs("mongodb://localhost:27017/test")

app.get("/getData",function(req,res){
  
    con.user.find(function(err,resu){
       if(err)
        res.send(err);
        else
        //console.log(resu);
        res.send(resu);
    })
})

app.post("/getinfo",function(req,res){
    reqbody=req.body;
    proid=parseInt(req.body.pid)
    con.user.find({id:proid},function(err,result){
        if(err)
        {
        //console.log(err)
        res.send(err)
        }
        else
       // console.log(result)
        res.send(result)
    })
})
app.post("/supins",function(req,res){
    rd=req.body;
    console.log(rd)
   con.signup.findOne({email:rd.email},(err,result)=>{
       if(err)
       {
           console.log(err)
       }
       else
       {
           if(result)
           {
                res.send("Email Already Existed")
           }
           else
           {
               con.signup.save(rd);
               res.send("inserted")
           }
       }
   })
   
})
app.post('/login',function(req,res){
    rd=req.body;
    con.signup.findOne({"email":rd.email},(err,result)=>{
        if(err)
        {
            
        }
        else
        {
            if(!result)
            {
                res.status(401).send("email is wrong");
            }
            else
            {
                if(result.password!==rd.password)
                {
                    res.status(401).send("Invalid password")
                }
                else
                {
                    if(result.email==rd.email && result.password==rd.password)
                    {
                        res.status(200).send("success")
                    }
                    
                }
            }
        }
    })
});

app.get("/mensData",function(req,res){
    con.mens.find(function(err,result){
        if(err)
        {
            res.send(err)
        }
        else
        {
            
            res.send(result)
        }
    })
  
})
app.post("/mensInfo",function(req,res){
    reqdata=req.body;
    mid=parseInt(req.body.mid)
    con.mens.find({id:mid},function(err,result){
        if(err)
        {
            res.send(err)
        }
        else
        {
            res.send(result);
        }
    })
})


app.get('/womensData',function(req,res){
    con.women.find(function(err,result)
    {
        if(err)
        {
            res.send(err)
        }
        else
        {
            res.send(result);
        }
    })
})
app.post("/wpd",function(req,res){

    wpid=parseInt(req.body.wpid)
  
    con.women.find({id:wpid},function(err,result)
    {
        if(err)
        {
            res.send(err)
        }
        else
        {
            //console.log(result)
            res.send(result);
        }
    })

})
app.get('/toyData',function(req,res)
{
    con.toys.find(function(err,result){
            if(err)
            {
                res.send(err)
            }
            else
            {
                res.send(result)
                
            }
    })
})
app.post("/tData",function(req,res)
{
    tid=parseInt(req.body.wpid)
    con.toys.find({id:tid},function(err,result)
    {
        if(err)
        {
            res.send(err)
        }
        else
        {
            res.send(result)
        }
    })
})
app.get("/sportsInfo",function(req,res)
{
    console.log('getting data')
})