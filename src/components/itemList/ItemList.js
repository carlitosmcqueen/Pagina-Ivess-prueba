import React from 'react';


const ItemListContainer = ({greeting, age}) =>{
    return (
    <div className='landing'>
        <span>{greeting}</span>
        <br/>
    </div>
    )
}

export default ItemListContainer;