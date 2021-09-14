import React from 'react'

const Book = (props) => {
    let {img, price, author} = props;

    let complexFunc = (price) => console.log(price);

    let logAuthor = ()=> console.log(author);

    return (<article className = "book">
        <img src={img} alt="Books"  onMouseOver ={() => console.log("Hover")} />
        <h4>{price}</h4>
        <h4>{author}</h4>
        <button type="button" onClick={logAuthor}>Press me</button>
        <button type="button" onClick={() => complexFunc(price)}>complex</button>
    </article>);
}

export default Book
