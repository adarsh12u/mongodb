const deletedata = require('./mongodb');
const deletesome = async()=>{
      let data = await deletedata();
      let result =await data.deleteOne(

        {name:"adarsh"}
      )
      console.log(result);
}
deletesome();