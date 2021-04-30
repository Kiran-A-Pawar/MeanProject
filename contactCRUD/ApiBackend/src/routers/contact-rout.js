const express = require("express");
const  Contact = require("../models/contact")
const router = new express.Router();

// router.post("/contact",async(req,res)=>{
//     try{
// const addingContactRecords = new Contact(req.body)
//      console.log(req.body)
//    const inserContact = await addingContactRecords.save();
//    res.send(inserContact)
 
//     }catch(e){
//       res.status(400).send(e)
//     }

// })

router.post("/contact",async(req,res)=>{
  try{
       const addRecords =new  Contact(req.body)
       console.log(req.body);
   const insertcontact = await addRecords.save();
   res.status(201).send(insertcontact);
}catch(e){
     res.status(400).send(e);
}
})



// router.post('/contact', (req, res) => {
//   var emp = new Contact({
//       name: req.body.name,
//       phone: req.body.phone,
//       email: req.body.email,
//       job: req.body.job,
//   });
//   emp.save((err, doc) => {
//       if (!err) { res.send(doc);          console.log(req.body.name)
//       }
//       else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }

//   });
// });







router.get("/contact",async(req,res)=>{
    try{

       const getcontacts = await Contact.find({});
   res.send(getcontacts)
 
    }catch(e){
      res.status(201).send(e)
    }

})



router.get("/contact/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getcontact = await Contact.findById(_id);
   res.send(getcontact)
 
    }catch(e){
      res.status(201).send(e)
    }

})



router.patch("/contact/:_id",async(req,res)=>{
    try{
       const  _id = req.params._id;
       console.log(req.body)

       const getcontact = await Contact.findByIdAndUpdate(_id,req.body, { new : true
           
       });
   res.send(getcontact)
 
    }catch(e){
      res.status(500).send(e)
    }

})

router.delete("/contact/:id",async(req,res)=>{
    try{
       const  _id = req.params.id;
       const getcontact = await Contact.findByIdAndDelete(req.params.id);
   res.send(getcontact)
 
    }catch(e){
      res.status(500).send(e)
    }

})


module.exports = router;














