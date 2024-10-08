import React from 'react';
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

//function ProductForm () {
    //return (

  //  );
//};
//function OrderInfo () {
    //return (

  //  );
//};

//parent component
function CompAssignment () {
    return (
        <div>
            <Header image={logoImg} title='Welcome to the product page!'/>
        </div>
    );
};


export default CompAssignment;