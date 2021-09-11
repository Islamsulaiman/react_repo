import React from "react"
import ReactDom from "react-dom"

function Greeting() {
    return (
        <div>
            <Name />
            <Massage />
        </div>
    )
}

let Name = () => {
    return <h2>Islam sulaiman</h2>
}
let Massage = () => {
    return <p>Iam Islam, I want to learn React</p>
}

ReactDom.render(<Greeting />, document.getElementById("root"));