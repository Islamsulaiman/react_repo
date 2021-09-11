import React from "react"
import ReactDom from "react-dom"
import "./index.css";


function BookList() {
    return (
        <section className="list">
            <Book />
        </section>
    );
}

const Book = () => {
    return (<article className="book">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51ddcXBCmcS._SY498_BO1,204,203,200_.jpg" alt="Books" />
        <h4><sup>$</sup>12 <sup>13</sup></h4>
        <h4>World chicken</h4>
    </article>);
}

ReactDom.render(<BookList />, document.getElementById("root"));