import productModel from "../models/productsmodel.js";

export const saveProduct=async(req,res)=>{
    let { 
        p_id,
        p_name,
        p_category,
        p_price,
        p_unit,
        p_quantity,
        p_filepath,
        p_is_displayed,
        p_display_order }=req.body;

    try {
       
        let result=await  productModel.findOne().sort({ "p_id": -1}).exec();
        let increproduct ;
        if(result === null){
            p_id=1001;
        } else {
            increproduct = result.p_id;
            p_id= increproduct + 1;
        }

        const product =new productModel({
            p_id,
            p_name,
            p_category,
            p_price,
            p_unit,
            p_quantity,
            p_filepath,
            p_is_displayed,
            p_display_order,
        });

        await product.save();
        console.log("Product Saved to DB.");
        res.send("Product Saved..");
    } catch (error) {
        console.log("Error saving product in DB.",error);
    }
}
export const getProduct=async(req,res)=>{
     let p_id= req.query.p_id;
    try {
        const productId=await productModel.findOne({'p_id':p_id});
        if(!productId){
            console.log("Can't find the productId.");
        }
        res.send(productId);
    } catch (error) {
        console.log("Error on retrieving products from DB.",error);
    }
}

 export const addProduct=async(req,res)=>{
    res.render('../admin/addProduct', {
        messageText : "Hi",
      })
 }
