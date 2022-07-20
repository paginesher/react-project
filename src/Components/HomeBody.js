

import React from 'react';
import '../SCSS/HomeBody.scss';
import i1 from '../ProductImg/52.jpg';
import i2 from '../ProductImg/40.jpg';
import i3 from '../ProductImg/41.jpg';
import i4 from '../ProductImg/53.jpg';

function Body () {
    return (
        <div>
        <main class="grid-container">
        <div class="grid-item"> <img src={i1} class="product__img" alt="img" />
            <h3>Money Tree Bundle (3p) </h3>
            <h3>Price:</h3>
            <p>$65.99</p>
            <button class="button">Buy</button>
            <h3>Description:</h3>
            <p>Money tree brings good luck, prosperity, provides protection against Negative energies and enhances the power of your surroundings.</p>
        </div>
        <div class="grid-item"> <img src={i2} class="product__img" alt="img" />
            <h3>Black Obsidian Money Tree</h3>
            <h3>Price:</h3>
            <p>$24.99</p>
            <button class="button">Buy</button>
            <h3>Description:</h3>
            <p>Black Obsidian has powerful metaphysical properties that help shield you against negativity</p>
        </div>
        <div class="grid-item"> <img src={i3} class="product__img" alt="img" />
            <h3>Assorted Money Tree</h3>
            <h3>Price:</h3>
            <p>$24.99</p>
            <button class="button" >Buy</button>
            <h3>Description:</h3>
            <p>Assorted Money Tree filled with Flourite , Tigers Eye , Red Jasper & Obsidian</p>
        </div>
        <div class="grid-item"> <img src={i4} class="product__img" alt="img" />
            <h3>Labradorite Money Tree</h3>
            <h3>Price:</h3>
            <p>$24.99</p>
            <button class="button">Buy</button>
            <h3>Description:</h3>
            <p>Labradorite is one of the most effective stones in treating anxiety,and amplifies a sense of calmness</p>
        </div>
    </main>
    </div>
    )
}

export default Body;