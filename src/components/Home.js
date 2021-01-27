import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../cardview.css';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import SocialIcons from './SocialIcons';
import '../efecto3d.css';
import logosemilla from '../images/logo-semillas.jpg';
import logolibro from '../images/logo-libro.jpg';
import landingpage from '../images/logo-Landing.jpg';




function Home() {
    return (
        <div class="d-flex flex-wrap flex-row-reverse row ">
            <Link to="/infosemillas" class="col-md-4">               
                    <div class="dcard">
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="card card-home d-flex flex-column justify-content-between ml-2">
                            <div class="card-body">
                                <img class="card-img-top img-efecto" src={logosemilla} alt="hotel img" />
                                <h2 class="textosobreimagen">Información de semillas</h2>
                                
                            </div>
                        </div> </div> 
            </Link>
            <Link to="/infoBook" class="col-md-4">               
                    <div class="dcard">
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="card card-home d-flex flex-column justify-content-between ml-2">
                            <div class="card-body">
                                <img class="card-img-top img-efecto" src={logolibro} alt="hotel img" />
                                <h2 class="textosobreimagen">Información de Libros</h2>
                            </div>
                        </div> </div> 
            </Link >
            <Link to="/infoLandingPage" class="col-md-4">               
                    <div class="dcard">
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="trigger"></div>
                        <div class="card card-home d-flex flex-column justify-content-between ml-2">
                            <div class="card-body">
                                <img class="card-img-top img-efecto" src={landingpage} alt="hotel img" />
                                <h2 class="textosobreimagen">Landing page</h2>
                            </div>
                        </div> </div> 
            </Link>


       



        </div>



    )
}

export default Home;