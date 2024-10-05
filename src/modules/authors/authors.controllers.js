import { author } from "../../../DB/authorModel.js";


const addauthor = async (req, res) => {
    const newauthor = await author.create(req.body);
    res.status(201).json({ message: "author created ..", newauthor });

};
const allauthors = async (req, res) => {
    const allauthors = await author.find();
    console.log(allauthors)
    res.status(200).json({ message: "success ..", allauthors })

};
const getauthor = async (req, res) => {
    const anAuthor = await author.findById(req.params.id).populate("books");
    
    if (!anAuthor) { res.status(401).json({ message: "author not found" }) }
    else { res.status(200).json({ message: "success", anAuthor}) }

};


const updateauthor= async (req, res) => {
    const updatedauthor= await author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedauthor) { res.status(401).json({ message: "author not found" }) }
    else { res.status(200).json({ message: "success", updatedauthor }) }
} ;
const deleteauthor = async (req, res) => {
    const deletedauthor = await author.findOneAndDelete(req.params.id);
    if (!deletedauthor) { res.status(401).json({ message: "author not found" }) }
    else { res.status(200).json({ message: "success", deletedauthor}) }
} ;
export {
    addauthor, allauthors, getauthor, updateauthor,deleteauthor
}