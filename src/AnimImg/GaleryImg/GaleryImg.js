import 'react-image-gallery/styles/css/image-gallery.css';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import Img1 from '../img/img/IP.jpg';
import Img2 from '../img/img/OIP.jpg';
import Img2b from '../img/img/flamingo-532672_640.jpg';
import Img2c from '../img/img/pOkIP.jpg';
import Img3 from '../img/img/phaeton_a_bec_jaune.jpg';
import Img4 from '../img/img/snapshot2018.jpg';
import Img5 from '../img/img/The_Kiss_-_Gustav_Klimt_.jpg';
import Img6 from '../img/img/CIMG3 (1).jpg';
import Compagny from '../bexai/components/Compagny';

class GaleryImg extends React.Component  {

    render (){
        const images = [
            {
              original: Img1,
              thumbnail: Img2c,
              content: "La science est totalement amorale, et complétement irresponsable " +
              "Hasard et chaos (1991), David Ruelle. " +
              " Question 1 : Diazote, ",
            },
            {
              original: Img6,
              thumbnail: Img2c,
              content: "Question 2 : Der Knoten, " +
              " Question 3 : Le ballon sonde, ",

            },
            {
              original: Img3,
              thumbnail: Img2c,
              content: "Nous dépendons entiérement de la reconnaissance " +
              "de notre rèalitè par les autres, qui eux-mêmes exigent " +
              "de nous que nous reconnaissions la leur. Paul Watzlawick",
            },
            {
              original: Img4,
              thumbnail: Img2c,
              content: "Question 4 : Des nuages stables, " +
              "La croissance de la personnalité se fait &agrave; partir de " +
              "l'inconscient. Carl Gustav Jung", 

            },
            {
              original: Img2b,
              thumbnail: Img2,
              content:  "Question 5: 10 000 mètres.  ",
              
            },
            {
              original: Img5,
              thumbnail: Img2c,
              content: "Le Baiser est un tableau du peintre autrichien Gustav Klimt, réalisé de 1908 a 1909." +
              "Cette huile sur toile recouverte de feuilles d'or est conservée au palais du Belvédére a Vienne." +
              "L'oeuvre fait partie du Cycle d'or de Klimt et elle est surement la plus célébre" +
              "du peintre autrichien.", 
              
            },
          ];
      
          return (
            <div className="justify-content-between bg-secondary mb-2"> 
            <ImageGallery items={images} />
            <ul>
               { images.map((todo, index) =>
                     <li key={ `todo-${index}` }>
                           { todo.content }
                </li>
               )};
            </ul>
          
            <div className="d-flex justify-content-between">
      <Compagny />
  </div>  </div> 
          );
        }
      
     
}export default GaleryImg;