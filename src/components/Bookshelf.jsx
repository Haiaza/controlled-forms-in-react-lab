import { useState } from "react";
import '../App.css'


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

const handleSubmit = (e) => {
    e.preventDefault()

    setBooks((prevBooks) => [
        ...prevBooks,
        newBook
    ])

    setNewBook({
        title:'',
        author:''
    })
}


return (
    <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
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

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) =>(
                    <div className="bookCard" key={index}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
)
}

export default Bookshelf