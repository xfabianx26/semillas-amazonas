import React from 'react';
import { Link } from 'react-router-dom';
import '../libro.css';
import libroUno from '../images/libro-uno.jpg';
import libroDos from '../images/libro-dos.gif';
import libroTres from '../images/libro-tres.jpg';



function InfoBook() {
    return (     
        <div>
          
    

            <div class="d-flex flex-wrap flex-row-reverse">

            
                <div class="card card-img d-flex flex-column justify-content-between ml-2">
               

                    <div class="card-body cuerpo">
                        <h5 class="card-title">Descripción:</h5>
                        <p class="card-text description-libro">
                        Este libro es la segunda edición revisada y 
                        segunda edición ampliada de 
                        un texto de éxito que ya fue 
                        revisado favorablemente por Brack 
                        (2006) y Dhakal (2008), por lo que 
                        no es de extrañar que se trate de un 
                        libro de texto pulido y útil. 
                        Se ha ampliado de 
                        de ocho a once capítulos y 
                        iluminado con cuatro láminas en color 
                        de color, pero dado su objetivo de ser 
                        un "libro de texto introductorio amplio".
                        de texto", se beneficiaría de 
                        más diagramas e ilustraciones para
                        de diagramas e ilustraciones para complementar el texto.
                        El libro trata de ser amplio, para presentar "la silvicultura mundial en un contexto social, medioambiental, histórico y económico". 
                        forestal mundial en un contexto social, medioambiental, histórico y económico 
                        desde el Devónico hasta los retos del futuro". 
                        futuro". Hay muchas maneras de cortar un pastel así, y 
                        Sands lo aborda con once capítulos.

</p>
                        
                    </div>
                    <div class="card-footer">
                        <strong>Más información consultes el link : </strong>
                        <a href="https://www.researchgate.net/publication/269457622_Forestry_in_a_Global_Context">Click Aqui</a>
                    </div>
                </div>
                <div class="card card-infosemi d-flex flex-column justify-content-between ml-2">
                    <div class="card-body cuerpo">
                        
                        <div class="col text-center">
                            <h5 class="card-title">Forestry in a global context</h5>
                          
                       
                        </div>
                        <img class="card-img-top img-fluid tamanofoto cajasombra" src={libroUno} alt="abarco" />
                    </div>
                </div>
            </div>
            {/* inicio */}
            <div class="d-flex flex-wrap flex-row-reverse">
                <div class="card card-img d-flex flex-column justify-content-between ml-2">
                    <div class="card-body cuerpo">
                        <h5 class="card-title">Descripción:</h5>
                        <p class="card-text description-libro">
                        El alcornoque, pese a ser una especie de crecimiento relativamente lento, tiene muchas ventajas frente a otras especies forestales, ya que la producción de corcho se obtiene en turnos de 9-10 años.   Por otra parte la producción mundial de corcho no es, ni lo será en un futuro próximo, suficiente para satisfacer la demanda actual y futura, lo que hace a esta especie muy aconsejable para reforestación de tierras marginales, cuando sus propietarios buscan la posibilidad de compensar la pérdida de renta agrícola mediante la reforestación de sus tierras.  

</p>
                        
                    </div>
                    <div class="card-footer">
                        <strong>Más información consultes el link : </strong>
                        <a href="https://www.todostuslibros.com/libros/el%C2%A0alcornoque-%C2%A0manual%C2%A0de%C2%A0reforestacion%C2%A0y%C2%A0cultivo_978-84-8476-121-1">Click Aqui</a>
                    </div>
                </div>
                <div class="card card-infosemi d-flex flex-column justify-content-between ml-2">
                    <div class="card-body cuerpo">
                        <div class="col text-center">
                            
                            <h5 class="card-title">Manual de reforestación</h5>
                          
                       
                        </div>
                        <img class="card-img-top img-fluid tamanofoto cajasombra" src={libroDos} alt="abarco" />
                    </div>
                </div>
            </div>


            {/* fin */}
          {/* inicio */}
          <div class="d-flex flex-wrap flex-row-reverse">
                <div class="card card-img d-flex flex-column justify-content-between ml-2">
                    <div class="card-body cuerpo">
                        <h5 class="card-title">Descripción:</h5>
                        <p class="card-text description-libro">
                        Los bosques y selvas son ecosistemas de gran valor para la
sociedad. Sus árboles constituyen recursos importantes para
los pobladores locales, no solamente por su madera sino
también por los productos comestibles y medicinales que se
obtienen. Además, se reconoce su importancia en la recuperación de los arroyos y ríos y del propio manto freático, que sirve
para abastecer agua potable a las poblaciones y en la fertilidad
del suelo. El papel de los bosques en el control del clima es hoy
un tema de gran importancia para la sociedad.
<br/>
<p>Los bosques y selvas fueron ecosistemas ampliamente distribuidos en México Sin embargo, actualmente la deforestación
sigue en aumento. Estamos acostumbrados a seguir extrayendo y talando árboles, no solamente en grandes superficies para
llevar a los aserraderos, sino también para el uso diario, sin
hacer un esfuerzo por recuperarlos. Es un recurso limitado y la
generación actual que hace uso de este recurso debe modificar
actitudes e iniciar la recuperación de los bosques y selvas
mexicanos.</p>
</p>
                        
                    </div>
                    <div class="card-footer">
                        <strong>Más información consultes el link : </strong>
                        <a href="http://www.itto.int/files/itto_project_db_input/3000/Technical/Guia%20de%20reforestacion%20en%20los%20medanos.pdf">Click Aqui</a>
                    </div>
                </div>
                <div class="card card-infosemi d-flex flex-column justify-content-between ml-2">
                    <div class="card-body cuerpo">
                        <div class="col text-center">
                            
                            <h5 class="card-title">Reforestación y
enriquecimiento
</h5>
                          
                       
                        </div>
                        <img class="card-img-top img-fluid tamanofoto cajasombra" src={libroTres} alt="abarco" />
                    </div>
                </div>
            </div>


            {/* fin */}

            </div>
    )
}

export default InfoBook;