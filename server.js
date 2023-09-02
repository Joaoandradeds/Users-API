const express = require ("express")

const app = express();
app.use(express.json())

const users = []

app.post("/users",function(req,res){
    const user = req.body;
    user.id = users.length


    users.push(user);
    
    res.json(user)

})
app.get("/users", function(req,res){
    res.json(users)
})

app.get("/users/:id", function(req,res){
    const id = req.params.id
    const user = users.find(function(user){
        return user.id == id
    })

    if(user == undefined){
        res.status(404)
    }

    res.json(user)
})

app.listen(3000);

