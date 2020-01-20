import React from 'react';
//import { PieChart } from 'react-chartkick';    <PieChart data={[["Tevreio", 44], ["Uopafice", 23], ["Feunhio", 3],["Zetigo", 14], ["Charisdol", 16]]} />
import Sound from 'react-sound';
import soundBeep from "../../../assets/sound/airplane+breakdown+1.mp3";

const Compagny = () => {
    return (
      <div className="container">
        <div className="row">
         <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Une hypothése</div>
              <div className="card-body">
                <h4 className="card-title">la mémoire dans le temps</h4>
               <p className="card-text">La courbe de l'oubli ou courbe d'oubli est une hypothése sur le déclin de rétention de la mémoire dans le temps
                La courbe de l'oubli vise a montrer que les humains ont tendance é réduire de moitié leur mémoire de toutes nouvelles connaissances, 
                a moins qu'ils remémorisent consciemment cette nouvelle connaissance apprise. 
                La courbe de l'oubli soutient l'un des sept types de défaillances de la mémoire : 
                <i>l'éphémére, qui est le processus de l'oubli se produisant avec le passage du temps.</i><br />
                <u>Ebbinghaus</u> a émis l'hypothése que la vitesse de l'oubli dépend d'un certain nombre de facteurs 
                tels la difficulté du matériau d'apprentissage , sa représentation et des facteurs physiologiques comme le stress ou le sommeil. 
                Il est allé jusqu'é énoncer que le taux fondamental d'oubli différe entre les individus. Il en conclut alors que cette différence de performance 
                 peut étre expliquée par les différentes compétences de représentation mnémonique. 
              </p>
              </div>
            </div>
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Une personnalité</div>
              <div className="card-body">
                <h4 className="card-title">Astronome français.</h4>
               <p className="card-text">
                Depuis l'observation exacte de la grandeur apparente des diamétres du soleil, 
                mon pére a trouvé une autre courbe différente de l'ellipse, qui sert é représenter fort exactement les mouvements 
                vrais du Soleil, et ses diverses distances é la Terre. 
                Il suppose que la terre étant placée é l'un des foyers de cette courbe, le soleil la parcourt par son mouvement propre,
                 de maniére que tirant de son centre aux deux foyers de la courbe deux lignes droites, le rectangle fait sur ces deux lignes 
                 soit toujours égal au rectangle ... Extrait des Eléments d'astronomie de Jean Cassini (1740).
                Concernant Mars, il mesure sa période de rotation é moins de 3 minutes prés. Deux ans plus tard, 
                il découvre des erreurs sur ses tables des satellites joviens, et en déduit ingénieusement que la vitesse de la lumiére 
                est finie !! Mais, grave erreur, il rejette ensuite cette hypothése. 
               <u>Jean-Dominique Cassini  (1625-1712)</u>
              </p>
              </div>
            </div>
            <Sound
                    url={soundBeep}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={300 /* in milliseconds */}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                  />
            </div>
         </div>
    )
}
export default Compagny;