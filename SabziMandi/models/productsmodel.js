import mongoose from "mongoose";

const productsSchema=new mongoose.Schema({
    p_id:Number,
    p_name:String,
    p_category:String,
    p_price:Number,
    p_unit:String,
    p_quantity:String,
    p_filepath:String,
    p_is_displayed:Boolean,
    p_display_order:String,
})
const productModel=mongoose.model('product',productsSchema);
export default productModel;