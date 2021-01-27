import React, { Fragment } from 'react';
import  { connect } from 'react-redux';
import { productQuantity, clearProduct}  from '../actions/productQuantity';

import foto1 from '../images/foto1.png';
import foto2 from '../images/foto2.png';
import foto3 from '../images/foto3.png';
import foto4 from '../images/foto4.png';
import foto5 from '../images/foto5.png';
import foto6 from '../images/foto6.png';
import foto7 from '../images/foto7.png';
import foto8 from '../images/foto8.png';
import foto9 from '../images/foto9.png';
import foto10 from '../images/foto10.png';
import foto11 from '../images/foto11.png';
import foto12 from '../images/foto12.png';
import PaypalCheckoutButton from './PaypalCheckoutButton';

function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item){
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);

    }); 
    // const productImages = [camisa1,camisa2,camisa3,camisa4];
    const productImages = (product) => {
        if(product.tagName === 'foto1'){
            return foto1;
        }else if(product.tagName === 'foto2'){
            return foto2;
        }else if(product.tagName === 'foto3'){
            return foto3;
        }else if(product.tagName === 'foto4'){
            return foto4;
        }else if(product.tagName === 'foto5'){
            return foto5;
        }else if(product.tagName === 'foto6'){
            return foto6;
        }else if(product.tagName === 'foto7'){
            return foto7;
        }else if(product.tagName === 'foto8'){
            return foto8;
        }else if(product.tagName === 'foto9'){
            return foto9;
        }else if(product.tagName === 'foto10'){
            return foto10;
        }else if(product.tagName === 'foto11'){
            return foto11;
        }else if(product.tagName === 'foto12'){
            return foto12;
        }
        
    }
    productsInCart = productsInCart.map((product, index) => {
        
        console.log("My product is");
        console.log(product);
        return(
            <Fragment>
                <div className="product"><ion-icon  onClick={() => clearProduct(product.tagName)}  name="close-circle"></ion-icon><img src={productImages(product)}/>
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                <ion-icon  onClick={() => productQuantity('increase',  product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCTO</h5>
                <h5 className="price sm-hide">PRECIO</h5>
                <h5 className="quantity">CANTIDAD</h5>
                <h5 className="total">TOTAL</h5>
               
            </div>
            
            <div className="products">
                 {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">TOTAL PAGAR: </h4>
                <h4 className="basketTotal">{basketProps.cartCost},00</h4>
            </div>
            <div className="payPal">
            <PaypalCheckoutButton/>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    basketProps: state.basketState
});


export default connect(mapStateToProps, { productQuantity, clearProduct } )(Cart);

