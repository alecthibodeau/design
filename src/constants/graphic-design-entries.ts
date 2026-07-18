/* Constants */
import text from './text.ts'

/* Images */
import imageShakingHands from '../assets/images/shaking-hands.jpg';
import imageVanFlowers from '../assets/images/van-flowers.jpg';
import imageMetalEffect from '../assets/images/metal-effect.jpg';
import imageBurnsideMusic from '../assets/images/burnside-music.jpg';
import imageWhiteElectric from '../assets/images/white-electric.jpg';
import imageSmartFlesh from '../assets/images/lp-smart-flesh.jpg';
import imageLpSp866 from '../assets/images/lp-sp866.jpg';
import imageLpSp735 from '../assets/images/lp-sp735.jpg';
import imageCdSp866 from '../assets/images/cd-sp866.jpg';
import imageCdSp735 from '../assets/images/cd-sp735.jpg';

/* Interfaces */
import GraphicDesignEntry from '../interfaces/GraphicDesignEntry';

const {
  textCategoryPhotoshopping,
  textCategoryBranding,
  textCategoryPackaging,
  textImageEditing,
  textPhotoshop,
  textVinylAlbumPackaging,
  textAdobePhotoshopIllustratorIndesign,
  textCompactDiscPackaging
} = text;

const entriesPhotoshopping: GraphicDesignEntry[] = [
  {
    category: textCategoryPhotoshopping,
    image: imageShakingHands,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  },
  {
    category: textCategoryPhotoshopping,
    image: imageVanFlowers,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  },
  {
    category: textCategoryPhotoshopping,
    image: imageMetalEffect,
    captionOne: textImageEditing,
    captionTwo: textPhotoshop
  }
];

const entriesBranding: GraphicDesignEntry[] = [
  {
    category: textCategoryBranding,
    image: imageBurnsideMusic,
    captionOne: 'Branding for municipal park',
    captionTwo: 'Adobe Photoshop and Illustrator'
  },
  {
    category: textCategoryBranding,
    image: imageWhiteElectric,
    captionOne: 'Branding for coffee shop',
    captionTwo: 'Adobe Photoshop',
    imageBorder: true
  }
];

const entriesPackaging: GraphicDesignEntry[] = [
  {
    category: textCategoryPackaging,
    image: imageSmartFlesh,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    category: textCategoryPackaging,
    image: imageLpSp866,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    category: textCategoryPackaging,
    image: imageLpSp735,
    captionOne: textVinylAlbumPackaging,
    captionTwo: textAdobePhotoshopIllustratorIndesign
  },
  {
    category: textCategoryPackaging,
    image: imageCdSp866,
    captionOne: textCompactDiscPackaging,
    captionTwo: 'Adobe Illustrator and InDesign'
  },
  {
    category: textCategoryPackaging,
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
