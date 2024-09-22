import { useState } from "react";

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros'},
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])
    const [newBook, setNewBook] = useState({
        title: "",
        author: ''
    })
    // setting state 1st 


        // handlers

const handleInputChange = (e) => {
    // const bookUpdate = (e.target.value)
    const { name, value } = e.target


    setNewBook((book) => ({
        ...book, 
        [name]: value, 
    }))
}



return (
    <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <label htmlFor="newBook">Title</label>
                <input 
                    id="newBook" 
                    name="title"    
                    type="text" 
                    value={newBook.title} 
                    onChange={handleInputChange}
                />
                <label htmlFor="newBook">Author</label>
                <input 
                    id="newBook" 
                    name="author" 
                    type="text" 
                    value={newBook.author} 
                    onChange={handleInputChange}
                />
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    </>
)
}

export default Bookshelf