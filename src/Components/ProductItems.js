import React from 'react';
import '../SCSS/ProductBody.scss'


function ProductItems(props) {
    return (
        <div grid-items>
            <img src={props.product.img} alt={props.product.title} />
            <h3>{props.product.title}</h3>
            <h4>$ {props.product.price}</h4>
            <p>{props.product.description}</p>
            <div class="center">
                <button id="submitBtn" type="submit">ADD</button>
            </div>
        </div>
    )
}

export default ProductItems;