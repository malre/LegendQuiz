import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './bootstrap.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Sound from 'react-sound';
import soundFly from "./img/Sound/airplane+FW-190.mp3";
import mainFont from './Fonts/SeaFire.ttf';
import mainFontEot from './Fonts/SeaFire.otf';
import myImage4 from "./img/img/CIMG346- (3).JPG";
import myImage3 from "./img/img/CIMG346- (4).JPG";
import myImage2 from "./img/img/CIMG346- (5).JPG";
import myImage5 from "./img/img/CIMG346- (6).JPG";
import myImage1 from "./img/img/CIMG346- (7).JPG";
import myImage7 from "./img/img/CIMG346- (10).JPG";
import myImage8 from "./img/img/CIMG346- (11).JPG";
import myImage9 from "./img/img/CIMG346- (12).JPG";
import myImage10 from "./img/img/CIMG346- (13).JPG";
import myImage11 from "./img/img/CIMG346- (8).JPG";
import myImage12 from "./img/img/CIMG346- (14).JPG";
import myImage13 from "./img/img/CIMG346- (15).JPG";
import myImage17 from "./img/img/CIMG346- (19).JPG";
import myImage18 from "./img/img/CIMG346- (9).JPG";



const ressources = {
      en:{
          translation: {
              Welcome:"Welcome to web test"
          }
      }
  };
const DivBtn = styled.div`
  background-color: slateblue;
  border: 2px;;
  display: block;
  height: 6px;
  margin: 0.5rem 0;
`
const H3 = styled.h3`
  background: linear-gradient(8deg, lightcoral 18%, steelblue 82%);
  border-radius: 6px;
  border: none;
  color: white;
  font-size: 8em;
  line-height: 1;
  vertical-align: baseline;
  font-family: 'SeaFire';
      src: url(${mainFont}) format('truetype');
      src: url(${mainFontEot}) format('embedded-opentype'),
      src: url('./Fonts/SeaFire.woff') format('woff'),
      src: url('./Fonts/SeaFire.svg') format('svg'); 
     
  @font-face {
      font-family: 'SeaFire';
      src: url(${mainFont}) format('truetype');
  }
`
const P1 = styled.p`
  color: steelblue;
  font-size: 5.8em;
  vertical-align: baseline;
  textAlign: center; 
  margin: 8px;
  padding: 6px 8px;
  font-family: 'SeaFire';
      src: url(${mainFont}) format('truetype');
      src: url(${mainFontEot}) format('embedded-opentype'),
      src: url('./Fonts/SeaFire.woff') format('woff'),
      src: url('./Fonts/SeaFire.svg') format('svg'); 
     
  @font-face {
      font-family: 'SeaFire';
      src: url(${mainFont}) format('truetype');
  }
`
// As a function component
class MySlideShowComponent extends Component {
      //  {/*constructor(props){
     //       super(props);<h3 theme={{ fontFamily: {mainFont} }} className="card-title btn-info ml-1">Air Legend Villaroche</h3>
        
     // }*/}
 render(){
           
    return (

     <section className="container mt-5">
      <div className="page-item lead">{/**/}
      <div className="card-body align-middle">
      <P1>Welcome</P1>
       <hr />
            
        <br />
     {/* <Carousel infiniteLoop autoPlay showArrows={false} transitionTime={1000}>*/}
       <Carousel axis="vertical" useKeyboardArrows  infiniteLoop autoPlay showArrows={false} transitionTime={500}>
            <div >
                 <img src={myImage2} alt=" "/>
                 <p className="legend">Air Legend Villaroche</p>
            </div>
            <div >
                <img src={myImage3} alt=" "/>
            </div>
            <div>
                  <img src={myImage12} alt=" "/>
                <p className="legend">Douglas AD Skyraider</p>
            </div>
            <div>
                  <img src={myImage13} alt=" "/>
            </div>
            <div>
                  <img src={myImage10} alt=" "/>
                  <p className="legend">Supermarine Spitfire LF Mk IX TA805 </p>
            </div>
            <div>
                  <img src={myImage1} alt=" "/>
                  <p className="legend">De Havilland Vampire FB6 </p>
            
            </div>
            <div >
                <img src={myImage4} alt=" "/>
                <p className="legend"> Supermarine Seafire</p>
            </div>
            <div>
                  <img src={myImage5} alt=" " />
                  <p className="legend"> Hawker Hunter</p>
            </div>
            
            <div>
                  <img src={myImage9} alt=" "/>
                  <p className="legend">Curtiss H75-C1 Hawk</p>
            </div>
            <div>
                <img src={myImage11} alt=" "/>
                <p className="legend">YAK-3U-PW </p>
                
            </div>
            <div>
                  <img src={myImage17} alt=" "/>
            </div>
            <div>
                  <img src={myImage8} alt=" "/>
                <p className="legend">CA-13 Boomerang </p>
            </div>
            <div>
                  <img src={myImage18} alt=" "/>
            </div>
            <div>
                  <img src={myImage7} alt=" "/>
                  <p className="legend">T6-G DASSAULT</p>
            </div>
            </Carousel> 
            </div>
           
             </div>
            <Sound
      url={soundFly}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  <H3>Air Legend Villaroche</H3>
 <DivBtn /><DivBtn />
    
       </section>
   
    );
      }
}

export default MySlideShowComponent;