import React from "react"
import ReactDom from "react-dom"
import "./index.css";


let bookArray = [
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/51ddcXBCmcS._SY498_BO1,204,203,200_.jpg",
        price: "$ 12.13",
        author: "World chicken"
    },
    {
        img: "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UL480_FMwebp_QL65_.jpg",
        price: "$ 10.15",
        author: "Robert kawasaki"
    }

];

function BookList() {
    return (
        <section className="list">
            {bookArray.map((item) => {
                return <Book book = {item}/>
            })}
        </section>
    );
}
const Book = (props) => {
    let {img, price, author} = props.book;
    return (<article className = "book">
        <img src={img} alt="Books" />
        <h4>{price}</h4>
        <h4>{author}</h4>
    </article>);
}

ReactDom.render(<BookList />, document.getElementById("root"));