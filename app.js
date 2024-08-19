//const app = require('express')()
 const express = require('express')//rata han
 const app = express()
 
 app.set('view engine','ejs')

app.get('/',(req,res)=>{
  const data = {
    name : "manish basnet ",
    age : 22,
    location : 'it'  
  }
  const nepal = {
    continent : 'asia'
  }
  res.render("home.ejs",{
    data ,
    nepal : nepal

  })
  })


app.get('/about',(req,res)=>{
    res.render("test/about")
})

app.use(express.static('public/css'))

 app.listen(3000,()=>{
    console.log("project suru bhayo")
 })//method listen














