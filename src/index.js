import React from "react"
import ReactDom from "react-dom"
import "./index.css";

//import the array of objects
import {bookArray} from './books'   //bookArray should match the same name of the array name

// import the sub-component from its file 
import Book from './subComponents' 

function BookList() {
    return (
        <section className="list">
            {bookArray.map((item) => {
                return <Book id={bookArray.id} {...item}/>
            })}
        </section>
    );
}


ReactDom.render(<BookList />, document.getElementById("root"));