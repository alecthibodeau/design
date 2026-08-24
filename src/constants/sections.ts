/* Constants */
import text from './text.ts'

/* Images */
import imageShakingHands from '../assets/images/shaking-hands.jpg';
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
  textHandIllustration,
  textAdobePhotoshop,
  textAdobeIllustrator,
  textAdobeInDesign,
  textVinylAlbumPackaging,
  textCompactDiscPackaging
} = text;

const entriesPhotoshopping: Entry[] = [
  {
    image: imageShakingHands,
    captionOne: textImageEditing,
    captionTwo: textAdobePhotoshop
  },
  {
    image: imageMetalEffect,
    captionOne: textImageEditing,
    captionTwo: textAdobePhotoshop
  }
];

const entriesBranding: Entry[] = [
  {
    image: imageBurnsideMusic,
    captionOne: 'Branding for municipal park',
    captionTwo: `${textAdobePhotoshop}, ${textAdobeIllustrator} and ${textHandIllustration}`
  },
  {
    image: imageWhiteElectric,
    captionOne: 'Branding for coffee shop',
    captionTwo: `${textAdobePhotoshop} and ${textHandIllustration}`,
    hasImageBorder: true
  }
];

const entriesPackaging: Entry[] = [
  {
    image: imageSmartFlesh,
    captionOne: textVinylAlbumPackaging,
    captionTwo: `${textAdobePhotoshop}, ${textAdobeIllustrator}, ${textAdobeInDesign} and ${textHandIllustration}`,
    hasImageBorder: true
  },
  {
    image: imageLpSp866,
    captionOne: textVinylAlbumPackaging,
    captionTwo: `${textAdobePhotoshop}, ${textAdobeIllustrator}, ${textAdobeInDesign} and ${textHandIllustration}`,
    hasImageBorder: true
  },
  {
    image: imageLpSp735,
    captionOne: textVinylAlbumPackaging,
    captionTwo: `${textAdobePhotoshop}, ${textAdobeIllustrator}, ${textAdobeInDesign} and ${textHandIllustration}`,
    hasImageBorder: true
  },
  {
    image: imageCdSp866,
    captionOne: textCompactDiscPackaging,
    captionTwo: `${textAdobeIllustrator} and ${textAdobeInDesign}`
  },
  {
    image: imageCdSp735,
    captionOne: textCompactDiscPackaging,
    captionTwo: `${textAdobePhotoshop}, ${textAdobeInDesign} and ${textHandIllustration}`
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
