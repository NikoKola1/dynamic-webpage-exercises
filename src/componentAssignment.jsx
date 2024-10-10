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

//productform component for selecting products and maintain quantity
function ProductForm ({onProductChange}) {
    //arrays for produycts and prices
    const productNames = ['Asus GeForce 4060', 'AMD Ryzen 7','Intel Core i7-14700k', 'AMD Ryzen 9'];
    const productPrices = ['199','249', '179', '99'];

    //state of selected product and quantity
    const [selectedProduct, setSelectedProduct] = useState(0);
    const [quantity, setQuantity] = useState(0);

    //handles product selection change
    const productChange = (event) => {
        const productIndex = Number(event.target.value);
        setSelectedProduct(productIndex);
        onProductChange(productNames[productIndex], productPrices[productIndex], quantity);
    };

    //increase quantity
    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onProductChange(productNames[selectedProduct], productPrices[selectedProduct], newQuantity);
    };
    //decrease quantity but not below 0
    const decreaseQuantity = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onProductChange(productNames[selectedProduct], productPrices[selectedProduct], newQuantity);
        }
    };
    return (
        <div className='product-form'>
            <h2>Select product</h2>
            <label>Product: </label>

            <select value={selectedProduct} onChange={productChange}>
                {productNames.map((product, p) => (
                <option key={p} value={p}> {product} - {productPrices[p]}€</option>
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

//orderinfo component to display summary in table format
function OrderInfo ({productNames, productPrices, quantity}) {
    //calculate total price of selected products
    const priceSum = productPrices * quantity;
    return (
        <div>
            <h2>Order info</h2>
            <table className='order-info'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productNames}</td>
                        <td>{quantity}</td>
                        <td>{priceSum}€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

//parent component
function CompAssignment () {
    //store current order details
    const [order, setOrder] = useState ({
        productNames: '',
        productPrices: 0,
        quantity: 0,
    });
    //handles product change
    const handleProductChange = (productNames, productPrices, quantity) => {
        setOrder({
            productNames,
            productPrices,
            quantity,
        });
    };
    return (
        <div className='container'>
            <Header image={logoImg} title='Welcome to the product page!'/>
            <ProductForm onProductChange={handleProductChange}/>
            <OrderInfo
                productNames={order.productNames}
                productPrices={order.productPrices}
                quantity={order.quantity}
            />
        </div>
    );
};


export default CompAssignment;