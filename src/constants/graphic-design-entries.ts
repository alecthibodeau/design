/* Images */
import imageShakingHands from '../assets/images/shaking-hands.jpg';
import imageVanFlowers from '../assets/images/van-flowers.jpg';
import imageMetalEffect from '../assets/images/metal-effect.jpg';
import imageBurnsideMusic from '../assets/images/burnside-music.jpg';
import imageSmartFlesh from '../assets/images/lp-smart-flesh.jpg';
import imageLpSp866 from '../assets/images/lp-sp866.jpg';
import imageLpSp735 from '../assets/images/lp-sp735.jpg';
import imageCdSp866 from '../assets/images/cd-sp866.jpg';
import imageCdSp735 from '../assets/images/cd-sp735.jpg';

/* Interfaces */
import GraphicDesignEntry from '../interfaces/GraphicDesignEntry';

const textImageEditing: string = 'Image editing for creative agency';
const textPhotoshop: string = 'Adobe Photoshop';
const textVinylAlbumPackaging: string = 'Vinyl album packaging for record label';
const textAdobePhotoshopIllustratorIndesign: string = 'Adobe Photoshop, Illustrator and InDesign';
const textCompactDiscPackaging: string = 'Compact disc packaging for record label';

const entriesPhotoshopping: GraphicDesignEntry[] = [
  {
    image: imageShakingHands,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  },
  {
    image: imageVanFlowers,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  },
  {
    image: imageMetalEffect,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  }
];

const entriesBranding: GraphicDesignEntry[] = [
  {
    image: imageBurnsideMusic,
    captionOne: 'Branding for municipal park',
    captionTwo: 'Adobe Photoshop and Illustrator'
  }
];

const entriesPackaging: GraphicDesignEntry[] = [
  {
    image: imageSmartFlesh,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    image: imageLpSp866,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    image: imageLpSp735,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    image: imageCdSp866,
    captionOne: textCompactDiscPackaging,
    captionTwo: 'Adobe Illustrator and InDesign'
  },
  {
    image: imageCdSp735,
    captionOne: textCompactDiscPackaging,
    captionTwo: 'Adobe Photoshop and InDesign'
  }
];

const graphicDesignEntries = {
  entriesBranding,
  entriesPackaging,
  entriesPhotoshopping
};

export default graphicDesignEntries;
