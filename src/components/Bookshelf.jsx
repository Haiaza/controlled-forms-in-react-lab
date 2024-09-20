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

//     Instructions:

// Create a function named handleInputChange that will be triggered each time the user types in an input field.
// The function should take an event object as its argument. Use this event to access the name of the input field and the value the user has typed.
// Construct a new version of the newBook object that includes the updated fields. Make sure you maintain the values of other fields in newBook that aren’t currently being updated. (Hint: Use the spread operator ... to create a new copy of the newBook object)
// Use the setNewBook setter function to update the state of newBook with this new object to reflect the changes in your U

        // handlers

    const handleInputChange = (e) => {
        const bookUpdate = (e.target.value)
        setNewBook(bookUpdate)
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <label htmlFor="newBook">New Book</label>
                    <input id="newBook" name={newBook} type="text" value={newBook} onChange={handleInputChange} />
                </div>
                <div className="bookCardsDiv">{/* Book cards will display here */}</div>
            </div>
        </>
    )
}

export default Bookshelf