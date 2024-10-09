import React, { useState } from 'react';
import logoImg from './images/comlogo.png';
import './componentAssignment.css';

//header component
function Header ({image, title}) {
    return (
        <header className='header'>
                <img src={image} className='headerImage'/>
                <h1 className='headerTitle'>{title}</h1>
        </header>
    );
};

function ProductForm () {
    //arrays for produycts and prices
    const productNames = ['Asus GeForce 4060', 'AMD Ryzen 7','Intel Core i7-14700k', 'AMD Ryzen 9'];
    const productPrices = ['199€','249€', '179€', '99€'];

    //state of selected product and quantity
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [quantity, setQuantity] = useState(0);

    //handles product selection
    const productChange = (event) => {
        selectedProduct(Number(event.target.value));
    };

    //increase quantity
    const increaseQuantity = () => {
        setQuantity(previousQuantity => previousQuantity + 1);
    };
    //decrease quantity but not below 0
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
            <h2>Select product</h2>
            <label>Product: </label>

            <select value={selectedProduct} onChange={productChange}>
                {productNames.map((product, p) => (
                <option key={p} value={p}> {product} - ${productPrices[p]}</option>
            ))} 
            </select>
            <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>Quantity: {quantity} </span>
                <button onClick={increaseQuantity}>+</button>
            </div>
            
        </div>
    );
};

//function OrderInfo () {
    //return (

  //  );
//};

//parent component
function CompAssignment () {
    return (
        <div className='container'>
            <Header image={logoImg} title='Welcome to the product page!'/>
            <ProductForm />
        </div>
    );
};


export default CompAssignment;