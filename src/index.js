import React from "react"
import ReactDom from "react-dom"
import "./index.css";


function BookList() {
    return (
        <section className="list">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return <article className="book">
        <Image />
        <Price />
        <Author />
    </article>
}

const Image = () => {
    return <img src="https://images-na.ssl-images-amazon.com/images/I/51ddcXBCmcS._SY498_BO1,204,203,200_.jpg" alt="Books" />
}

const Price = () => {
    return <h4><sup>$</sup>12 <sup>13</sup></h4>
}
const Author = () => {
    return <h4>World chicken</h4>
}
ReactDom.render(<BookList />, document.getElementById("root"));