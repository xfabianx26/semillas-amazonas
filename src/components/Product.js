import React from 'react';
import  { connect } from 'react-redux';
import  { addBasket } from '../actions/addAction';
// fotos
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



const Home = (props) => {
   
    return (
        <div className="container">
            <div className="image">
                <img className="fotoHome"  src={foto1} alt="foto" />
                <h3>Abarco (Semillas)</h3>
                <h3>$60.000</h3>
                <a onClick={() => props.addBasket('foto1')} className="addToCart cart1" href="#">Agregar carrito</a>
            </div>
            
            <div className="image">
                <img className="fotoHome"  src={foto2} alt="foto" />
                <h3>Acacia Japonesa </h3>
                <h3>$60.000</h3>
                <a onClick={() => props.addBasket('foto2')} className="addToCart cart1" href="#">Agregar carrito</a>
            </div>
            
            <div className="image">
                <img className="fotoHome" src={foto3} alt="foto" />
                <h3>Acacia Mangium</h3>
                <h3>$60.000</h3>
                <a onClick={() => props.addBasket('foto3')} className="addToCart cart3" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto4} alt="foto" />
                <h3>Aliso</h3>
                <h3>$60.000</h3>
                <a onClick={() => props.addBasket('foto4')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto5} alt="foto" />
                <h3>Cedro de Altura </h3>
                <h3>$80.000</h3>
                <a onClick={() => props.addBasket('foto5')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto6} alt="foto" />
                <h3>Guayacán de Manizales</h3>
                <h3>$120.000</h3>
                <a onClick={() => props.addBasket('foto6')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto7} alt="foto" />
                <h3>Acacia Blanca</h3>
                <h3>$110.000</h3>
                <a onClick={() => props.addBasket('foto7')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto8} alt="foto" />
                <h3>Acacia Amarilla</h3>
                <h3>$70.000</h3>
                <a onClick={() => props.addBasket('foto8')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto9} alt="foto" />
                <h3>Acacia Roja</h3>
                <h3>$130.000</h3>
                <a onClick={() => props.addBasket('foto9')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto10} alt="foto" />
                <h3>Achiote-Onoto</h3>
                <h3>$60.000</h3>
                <a onClick={() => props.addBasket('foto10')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto11} alt="foto" />
                <h3>Alcaparro gigante</h3>
                <h3>$87.000</h3>
                <a onClick={() => props.addBasket('foto11')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
            <div className="image">
                <img className="fotoHome"  src={foto12} alt="foto" />
                <h3>Arrayán</h3>
                <h3>$90.000</h3>
                <a onClick={() => props.addBasket('foto12')} className="addToCart cart4" href="#">Agregar carrito</a>
            </div>
        </div>

    );
}

export default connect(null, { addBasket })(Home);