import React from "react"
import ReactDom from "react-dom"
import "./index.css";

let firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ddcXBCmcS._SY498_BO1,204,203,200_.jpg",
    price: "$ 12.13",
    author: "World chicken"
}

let secondBook = {
    img: "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UL480_FMwebp_QL65_.jpg",
    price: "$ 10.15",
    author: "Robert kawasaki"
}

function BookList() {
    return (
        <section className="list">
            <Book 
                image = {firstBook.img}
                prices = {firstBook.price}
                authors = {firstBook.author} 
            />
            <Book 
                image = {secondBook.img}
                prices = {secondBook.price}
                authors = {secondBook.author} 
            />
        </section>
    );
}

const Book = ({image, prices, authors}) => {
    return (<article className="book">
        <img src={image} alt="Books" />
        <h4>{prices}</h4>
        <h4>{authors}</h4>
    </article>);
}

ReactDom.render(<BookList />, document.getElementById("root"));