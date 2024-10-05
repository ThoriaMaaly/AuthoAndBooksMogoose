import { model, Schema ,Types} from "mongoose";
import { type } from "os";

const authorSchema = new Schema({
    name: {
        type: String ,
        required: true,

    },
    bio: {
        type:String ,
    

    },
    books: [{
        type: Types.ObjectId ,
       ref:"Book"

    }],
    birthDate:{
        type:Date,
    
    }
},{
    timestamps:true
});
 export const author= model('Author',authorSchema);
