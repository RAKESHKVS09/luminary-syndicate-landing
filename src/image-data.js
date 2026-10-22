import { assetUrl } from './asset-url.js'

// Credits verified against work/final-image-register.json.
// People photographs are illustrative stock images and do not establish membership or endorsement.
// Photographs: https://www.pexels.com/license/

export const peopleImages = {
  "welcome": {
    "image": assetUrl('images/people-home.jpg'),
    "alt": "Four adults standing together and smiling indoors.",
    "creator": "Edmond Dantès",
    "source": "https://www.pexels.com/photo/group-of-people-smiling-8555016/"
  },
  "learning": {
    "image": assetUrl('images/people-study.jpg'),
    "alt": "Young adults gathered around desks with books and a laptop.",
    "creator": "Ivan S",
    "source": "https://www.pexels.com/photo/group-of-people-studying-together-5676744/"
  }
};

export const countries = [
  {
    "image": assetUrl('images/africa.jpg'),
    "alt": "Table Mountain in Cape Town beneath a blue sky.",
    "creator": "Israel Luvhimbi",
    "source": "https://www.pexels.com/photo/majestic-view-of-table-mountain-in-cape-town-32108006/",
    "place": "Cape Town",
    "country": "South Africa"
  },
  {
    "image": assetUrl('images/asia-option-18662848.jpg'),
    "alt": "Mount Fuji reflected in a calm lake in Japan.",
    "creator": "Ansel Lee",
    "source": "https://www.pexels.com/photo/lake-and-volcano-behind-18662848/",
    "place": "Mount Fuji",
    "country": "Japan"
  },
  {
    "image": assetUrl('images/europe.jpg'),
    "alt": "Red rooftops across Lisbon on a clear day.",
    "creator": "Ricardo Rocon",
    "source": "https://www.pexels.com/photo/cityscape-of-lisbon-portugal-16343720/",
    "place": "Lisbon",
    "country": "Portugal"
  },
  {
    "image": assetUrl('images/northamerica.jpg'),
    "alt": "Mountains reflected in a lake in Banff National Park.",
    "creator": "Ryan Beirne",
    "source": "https://www.pexels.com/photo/mountains-reflecting-in-lake-in-banff-national-park-17709346/",
    "place": "Banff National Park",
    "country": "Canada"
  },
  {
    "image": assetUrl('images/southamerica.jpg'),
    "alt": "Copacabana Beach and Rio de Janeiro seen from above.",
    "creator": "K",
    "source": "https://www.pexels.com/photo/aerial-view-of-copacabana-rio-de-janeiro-brazil-23732401/",
    "place": "Rio de Janeiro",
    "country": "Brazil"
  }
];
