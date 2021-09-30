const fs = require("fs");
const path = require("path");
const newUser = require('./createUser')
////////////////////////////////////////////////////////first task

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
  ]







function CreateUser () {

    for(user of firstUsersList){
        if(user.gender === 'Female'){
            // fs.mkdir (`Peoples/Women/${user.name}`,{recursive:true},(err)=>{
            // });
            fs.writeFile(`Peoples/Women/${user.name}.txt`,`${user.age} - ${user.name}`,(err => {
                console.log(err)
            }))

        } else if (user.gender === 'Male'){

            fs.writeFile(`Peoples/Men/${user.name}.txt`,`${user.age} - ${user.name}`,(err => {
                console.log(err)
            }))
        }
      }
    }



CreateUser()

























