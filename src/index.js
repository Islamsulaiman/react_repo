import React from "react"
import ReactDom from "react-dom"
import "./index.css";

// variables
let img = "https://images-na.ssl-images-amazon.com/images/I/51ddcXBCmcS._SY498_BO1,204,203,200_.jpg";
let price = "$ 12.13";
let author = "World chicken";

function BookList() {
    return (
        <section className="list">
            <Book />
        </section>
    );
}

const Book = () => {
    return (<article className="book">
        <img src={img} alt="Books" />
        <h4>{price}</h4>
        <h4>{author}</h4>
    </article>);
}

ReactDom.render(<BookList />, document.getElementById("root"));