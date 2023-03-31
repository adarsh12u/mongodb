const dbbase = require('./mongodb');
 const update = async() =>{
     let data = await dbbase();
     let result =await data.updateMany(
        
        {name:"adarsh gurjar"},{
            $set:{name:"adarsh"}
        }
        
        )
    console.log(result);
    //  let result = data.find 
}
update()