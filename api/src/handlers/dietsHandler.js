const alldiets = require("../controllers/dietsController")

 const dietsHandler = async (req, res)=>{

     try{
        const allDiets = await alldiets();
        res.status(200).json(allDiets)

    }catch(error){
        res.status(400).json({error: error.message})
      }
 };

module.exports= dietsHandler;