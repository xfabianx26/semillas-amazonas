
import React, {useEffect} from 'react';
import  { connect } from 'react-redux';
import {getNumbers} from '../actions/getAction';
import {Link} from 'react-router-dom';

function Navbar (props) {
    

    useEffect(() => {
        getNumbers();
      
    }, []);

    return (
      <header>
          <div className="overlay"></div>
          <nav>
              <h2>Semillas Amazonas</h2>
              <ul>
              <li className="cart"><Link to="/">INICIO</Link></li>
                <li className="cart"><Link to="/about">QUIENES SOMOS</Link></li>
                  <li  className="cart"><Link to="/product">PRODUCTOS</Link></li>
                  <li className="cart"><Link to="/cart">
                  <ion-icon name="basket"></ion-icon>CARRITO <span className="basketColor">{props.basketProps.basketNumbers}</span>    
                  </Link></li>
              </ul>
          </nav>

      </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);
