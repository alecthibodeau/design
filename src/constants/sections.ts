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
import Entry  from '../interfaces/Entry.ts';
import Section from '../interfaces/Section.ts';

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

const entriesPhotoshopping: Entry[] = [
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

const entriesBranding: Entry[] = [
  {
    image: imageBurnsideMusic,
    captionOne: 'Branding for municipal park',
    captionTwo: 'Adobe Photoshop and Illustrator'
  },
  {
    image: imageWhiteElectric,
    captionOne: 'Branding for coffee shop',
    captionTwo: 'Adobe Photoshop',
    isImageBorder: true
  }
];

const entriesPackaging: Entry[] = [
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

const sections: Section[] = [
  {
    category: textCategoryPhotoshopping,
    entries: entriesPhotoshopping
  },
  {
    category: textCategoryBranding,
    entries: entriesBranding
  },
    {
    category: textCategoryPackaging,
    entries: entriesPackaging
  }
];

export default sections;
