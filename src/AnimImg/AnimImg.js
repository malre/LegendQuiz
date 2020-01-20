import React from 'react';
import Sky from 'react-sky';


import myImage from "./img/Apo3D-191118-2.png";
import myImage4 from "./img/FlowerOne.png";
import myImage3 from "./img/flowerTwo.png";
import myImage2 from "./img/FlowerTree.png";
import myImage5 from "./img/Apo3D-191118-17.png";
import myImage6 from './img/Apo3D-191122-6.png';
import myImage8 from './img/Apo3D-191122-11.png';

const AnimImgFirst = () => {
    return(
<Sky
images={{
  /* FORMAT AS FOLLOWS */
  0: myImage2,  /* You can pass as many images as you want */
  1: myImage3,
  2: myImage4, /* you can pass images in any form: link, imported via webpack... */
  3: myImage,
  4: myImage6,
  5: myImage5,
  6: myImage8
  //5: your other image..*/
  /* ... */
}}
how={110} /* Pass the number of images Sky will render chosing randomly */
time={40} /* time of animation */
size={'100px'} /* size of the rendered images */
background={'Ghostwhite'} /* background={'palettedvioletred'}color of background */
/>);
}
export default AnimImgFirst;