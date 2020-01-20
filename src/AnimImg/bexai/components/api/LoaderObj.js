import React from 'react';
import { Canvas } from 'react-three-fiber'
import Dassault from '../../../../assets/Dassault Mirage IVP/Dassault_Mirage_IVP.obj';
import Model from '/Model';
import Controls from './Controls';

function Result(props) {
  return (
   
    <div className="container is-fluid">
     <div className="notification">
     <main>
      <Canvas>
        <Model url={Dassault} />
        <Controls />
      </Canvas>
    </main> <br/ >
    <p>
    Le Mirage 2000 est un avion de chasse concu par la société franéaise Dassault Aviation à la fin 
    des années 1970. Bien que la formule à aile delta fasse penser au Mirage III des années 1960 
    et que le Mirage 2000 soit de taille comparable, il s'agit en fait d'un avion entiérement nouveau, 
    avec une surface alaire plus importante, naturellement instable pour améliorer sa manoeuvrabilité 
    et équipé de commandes de vol électriques. 
    
    </p>
   </div>
  </div>
   
  );
}

export default Result;
