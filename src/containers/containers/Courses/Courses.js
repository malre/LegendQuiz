import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';
import img1 from '../Course/img/WP_20150722K3.jpg';
import img2 from '../Course/img/WP_2015072K.jpg';
import img3 from '../Course/img/WP_20150722.jpg';

class Courses extends Component {
    state = {
        selectId : null,
        courses: [
            { id: 1, title: 'Toyota TS040 hybride ', img:img1, sujet:'Réplique de la 2014 Toyota TS040 hybride. La TS040 HYBRID, dévoilée sur le circuit Pole Ricard dans le sud ' +
            'de la France, est la voiture de course hybride la plus avancée au monde, avec un moteur à essence V8-cylindres à '+
            'aspiration naturelle de 3,7 litres avec 520 chevaux plus 480 chevaux avec puissance hybride et 1000 chevaux transmis à la surface de la route avec quatre roues motrices. ' },
            { id: 2, title: 'Red Bull RB6 ', img:img2, sujet:'Red Bull RB6 est monoplace de Formule 1 engagée par l\'équipe Red Bull Racing dans le cadre du championnat du monde de Formule 1 2010.'   },
            { id: 3, title: 'Toyota TS040',  img:img3, sujet:'La Toyota TS050 Hybrid est propulsée par un moteur V6 à injection directe biturbo de 2,4 litres de 500 chevaux, épaulé par deux moteurs électriques (un Aisin AW pour l’avant et Denso pour l’arrière) qui portent la puissance totale à 1000 chevaux. '}
        ]
    }
 
    render () {
        
        return (
           
            <div className="container">
          
            <div className="row">  
            <div className="card-body">
         
            <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (<div className="card text-white bg-secondary mb-3">
                                <Link 
                                key={course.id} 
                                
                                to={{
                                    pathname: this.props.match.url + '/' + course.id + course.title + course.sujet,
                                    search: '?Ilm=' + course.img 
                                }}>  
                                <div className="container is-fluid">     
                            <article title={course.title} className="Courses"> 
                            <p className=" card-text">
                            {course.title}
                            
                            </p></article></div>
                            </Link></div>);
                        } )
                    }
                    
                    

                </section><h1 className="card-title">Amazing Udemy Courses</h1>
                <Route path={this.props.match.url + '/:id'} component={Course} />
            </div>    
            
           </div>
                </div>
                           
        );
    }
}

export default Courses;