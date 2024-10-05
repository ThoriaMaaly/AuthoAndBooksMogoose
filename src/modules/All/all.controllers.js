import { query } from "express";
import { author } from "../../../DB/authorModel.js";
import { book } from "../../../DB/bookModel.js";

export const All = async (req, res) => {

    const { bookTitle, bookAuthor, authorName, authorBio } = req.query;
    
    // use var for overwrite........
    var books;
    var authors;

    //checking if user send any query?? */

    //filtering by available qurey params */
    //  if  لو بعت حاجه وحده بس هتدخل جوة 
    if ((bookAuthor || bookTitle) || (authorName || authorBio)) {
       
       
        // **checking for book query***


        if (bookAuthor || bookTitle) {
            books = await book.find({
                $or: [{ title: bookTitle }, { author: bookAuthor }]

            })
        } else { books = await book.find(); };  // book لو مبعتش حاجه تخص 



        if (authorName || authorBio) {
            authors = await author.find({
                $or: [{ name: authorName }, { bio: authorBio }]

            });
        } else {
            authors = await author.find(); // author لو مبعتش حاجه تخص 
        }

        res.status(200).json({ message: "success", books, authors })
    }

    //**case no query*** */======>>response will be all books and all authors
    else {


        books = await book.find();
        authors = await author.find();
        res.status(200).json({ message: "success", books, authors })


    }


}