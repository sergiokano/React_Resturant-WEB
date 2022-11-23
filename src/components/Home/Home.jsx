import React from 'react'
import './Home.css'

const Home = (props) => {
    const dishes = props.menu.map((dish,index) => {
        return (
            <div key={index}>
                <p><div><b>Name:</b> {dish.name}</div>
                <div><b>Description:</b> {dish.description}</div>
                <div><b>Price:</b> {dish.price}</div></p>
            </div>
        )
    })
    return (
        <div>
            <h1>Menu</h1>
            <div>
                { dishes }
            </div>
        </div>
    )
}

export default Home