import React from 'react';
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
const Container = () => {
    return (
        <div className='container'>
            <Jumbotron />

            <div className='row'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </div>


    );

}
export default Container; 