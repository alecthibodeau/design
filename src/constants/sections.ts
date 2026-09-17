/* Constants */
import text from './text.ts'

/* Images */
import imageCachalot from '../assets/images/alec-thibodeau-cachalot.jpg';
import imageCdSp866 from '../assets/images/alec-thibodeau-cd-sp866.jpg';
import imageCdSp735 from '../assets/images/alec-thibodeau-cd-sp735.jpg';
import imageDeadInDesemboque from '../assets/images/alec-thibodeau-dead-in-desemboque.jpg';
import imageEpochTravelersOne from '../assets/images/alec-thibodeau-epoch-travelers-one.jpg';
import imageEpochTravelersTwo from '../assets/images/alec-thibodeau-epoch-travelers-two.jpg';
import imageFromTheCurb from '../assets/images/alec-thibodeau-from-the-curb.jpg';
import imageLoveWins from '../assets/images/alec-thibodeau-love-wins.jpg';
import imageLpSp735 from '../assets/images/alec-thibodeau-lp-sp735.jpg';
import imageLpSp866 from '../assets/images/alec-thibodeau-lp-sp866.jpg';
import imageSmartFlesh from '../assets/images/alec-thibodeau-lp-smart-flesh.jpg';
import imageWhiteElectric from '../assets/images/alec-thibodeau-white-electric.jpg';

/* Interfaces */
import Entry  from '../interfaces/Entry.ts';
import Section from '../interfaces/Section.ts';

const {
  textCategoryPhotoshopping,
  textCategoryBranding,
  textCategoryPackaging,
  textEpochTravelers,
  textImageEditing,
  textHandIllustration,
  textAdobePhotoshop,
  textAdobeIllustrator,
  textAdobeInDesign,
  textVinylAlbumPackaging,
  textCompactDiscPackaging
} = text;

const entriesBranding: Entry[] = [
  {
    image: imageWhiteElectric,
    description: 'White Electric',
    captionOne: 'Poster for worker-owned cooperative cafe',
    captionTwo: `${textAdobePhotoshop} and ${textHandIllustration}`,
    hasImageBorder: true
  },
  {
    image: imageFromTheCurb,
    description: 'From the Curb',
    captionOne: 'Logo for gallery exhibition',
    captionTwo: `${textAdobePhotoshop}`
  }
];

const entriesPackaging: Entry[] = [
  {
    image: imageSmartFlesh,
    description: 'Low Anthem - Smart Flesh',
    captionOne: textVinylAlbumPackaging,
    captionTwo: `${textAdobePhotoshop}, ${textAdobeIllustrator}, ${textAdobeInDesign} and ${textHandIllustration}`,
    hasImageBorder: true
  },
  {
    image: imageLpSp866,
    description: 'Death Vessel - Island Intervals',
    captionOne: textVinylAlbumPackaging,
    captionTwo: `${textAdobePhotoshop}, ${textAdobeIllustrator}, ${textAdobeInDesign} and ${textHandIllustration}`,
    hasImageBorder: true
  },
  {
    image: imageLpSp735,
    description: 'Death Vessel - Nothing is Precious Enough for Us',
    captionOne: textVinylAlbumPackaging,
    captionTwo: `${textAdobePhotoshop}, ${textAdobeIllustrator}, ${textAdobeInDesign} and ${textHandIllustration}`,
    hasImageBorder: true
  },
  {
    image: imageCdSp866,
    description: 'Death Vessel - Island Intervals',
    captionOne: textCompactDiscPackaging,
    captionTwo: `${textAdobeIllustrator} and ${textAdobeInDesign}`
  },
  {
    image: imageCdSp735,
    description: 'Death Vessel - Nothing is Precious Enough for Us',
    captionOne: textCompactDiscPackaging,
    captionTwo: `${textAdobePhotoshop}, ${textAdobeInDesign} and ${textHandIllustration}`
  },
  {
    image: imageCachalot,
    description: 'Cachalot postcard',
    captionOne: 'Postcard for online shop',
    captionTwo: `${textAdobeIllustrator}`
  },
  {
    image: imageLoveWins,
    description: 'Love Wins postcard',
    captionOne: 'Postcard for online shop',
    captionTwo: `${textAdobeIllustrator}`
  },
  {
    image: imageDeadInDesemboque,
    description: 'Dead in Desemboque graphic novel cover illustration',
    captionOne: 'Graphic novel cover for book publisher',
    captionTwo: `${textAdobePhotoshop}, plus ${textHandIllustration} by multiple artists`,
    hasImageBorder: true
  }
];

const entriesPhotoshopping: Entry[] = [
  {
    image: imageEpochTravelersOne,
    description: textEpochTravelers,
    captionOne: textImageEditing,
    captionTwo: textAdobePhotoshop
  },
  {
    image: imageEpochTravelersTwo,
    description: textEpochTravelers,
    captionOne: textImageEditing,
    captionTwo: textAdobePhotoshop
  }
];

const sections: Section[] = [
  {
    category: textCategoryPackaging,
    entries: entriesPackaging
  },
  {
    category: textCategoryBranding,
    entries: entriesBranding
  },
  {
    category: textCategoryPhotoshopping,
    entries: entriesPhotoshopping
  }
];

export default sections;
