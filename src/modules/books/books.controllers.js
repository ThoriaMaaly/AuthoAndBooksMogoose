import { book } from "../../../DB/bookModel.js"

const addbook = async (req, res) => {
    const newbook = await book.create(req.body);
    res.status(201).json({ message: "book created ..", newbook });

};
const allbooks = async (req, res) => {
    const allbooks = await book.find();
    console.log(allbooks)
    res.status(200).json({ message: "success ..", allbooks })

};
const getbook = async (req, res) => {
    const abook = await book.findById(req.params.id);
    if (!book) { res.status(401).json({ message: "abook not found" }) }
    else { res.status(200).json({ message: "success", abook }) }

};

const updatebook = async (req, res) => {
    const updatedbook = await book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedbook) { res.status(401).json({ message: "abook not found" }) }
    else { res.status(200).json({ message: "success", updatedbook }) }
} ;
const deletebook = async (req, res) => {
    const deletedbook = await book.findOneAndDelete(req.params.id);
    if (!deletedbook) { res.status(401).json({ message: "abook not found"}) }
    else { res.status(200).json({ message: "success", deletedbook }) }
} ;
export {
    addbook, allbooks, getbook, updatebook,deletebook
}