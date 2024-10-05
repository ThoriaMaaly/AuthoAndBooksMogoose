import { model, Schema } from "mongoose";
import { type } from "os";

const bookSchema = new Schema({
    title: {
        type: String ,
        required: true,

    },
    content: {
        type: String ,
        required: true,

    },
    author: {
        type: String ,
        required: true,
        ref:"Author"

    },
    publishedDate:{
        type:Date,
        default: new Date().toJSON().slice(0, 10)
    }
},{
    timestamps:true
});
 export const book= model('Book',bookSchema);
