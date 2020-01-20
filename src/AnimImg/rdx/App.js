import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class Appt extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <div className="hero-body">
       <div className="page-item lead">
       <h1 className="title">Exemple de calcul</h1><br /><br />
        <p><ol>Réduction du carburant de voyage - Réduction de poids x Temps de vol en heures x 3,5 %<br />
           Par exemple : 10 pax de moins sur un vol de 2 h, 1 000 kg x 2 x 3,5 % et 70 kg de carburant de déplacement inférieur.<br />
       <u>Flaps d'atterrissage</u><br />
        Flap 30 utilise 25kgs moins de carburant que le volet 40 de 1500 pi au toucher des roues.
        <br /> <u>Anti Glace</u><br />
        Moteur Anti-glace brûle 90 kg par heure.
        Moteur et aile L'antiglace brûle 250 kg par heure.
        <br />   <u>Configurations non normales</u><br />
        <u>Comparé à 2 Moteur LRC à Optimum Altitude pour n'importe quel poids donné : </u><br />
        Engine Out LRC brûle 21 % plus de carburant.
        Engine Out LRC augmente time Interval de 13%. 
        Le LRC dépressurisé (2 Engines@10 000') brûle 49% de carburant en plus.
        LRC dépressurisé augmente time Interval de 20%. 
        Gear Down brûle 89% de carburant en plus! Gear Down augmente time Interval de 29%. 
  </ol></p> </div> </div> </div>
    );
  }
}

export default Appt;
