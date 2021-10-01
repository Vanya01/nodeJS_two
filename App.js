const fs = require("fs");
const path = require("path");
const menWay = path.join(__dirname,'Peoples','Men');
const womenWay = path.join(__dirname,'Peoples','Women');
  let firstUsersList = [
      {
          age:19,
          name:'Vanya',
          gender:'Male'
      },
      {
          age:28,
          name:'Max',
          gender:'Male'
      },
      {
          age:21,
          name:'Kris',
          gender:'Female'
      },
      {
          age:18,
          name:'Sonya',
          gender:'Female'
      },
      {
          age:23,
          name:'Ira',
          gender:'Female'
      },
  ];
  let secondUsersList = [
    {
        age:29,
        name:'Misha',
        gender:'Male'
    },
    {
        age:8,
        name:'Igor',
        gender:'Male'
    },
    {
        age:24,
        name:'Valya',
        gender:'Female'
    },
    {
        age:12,
        name:'Masha',
        gender:'Female'
    },
    {
        age:43,
        name:'Nadya',
        gender:'Female'
    },
];

 function sort (gender,newWay,oldWay){
     fs.readdir(path.join(__dirname,`${newWay}`),(err, files) => {
         if (err) {
             console.log(err);
             return
         }
         files.forEach(file =>{
             fs.readFile(path.join(__dirname,`${newWay}`,file),(err,data)=>{
                 if(err){
                     console.log(err)
                     return
                 }
                 const genderType = JSON.parse(data.toString())
                 if(genderType.gender === gender){
                     fs.rename(path.join(`${newWay}`,file),path.join(`${oldWay}`,file),(err)=>{
                           if(err){
                               console.log(err)
                           }
                     })
                 }
             })
         })
     })
 }

 sort ('Male','Women','Men');
 sort ('Female','Men','Women');






















