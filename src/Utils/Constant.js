export const NETFLIX_LOG = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};


export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';


export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
export const BG_CSS = ` bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-center bg-cover`

export const MOVEI_FROM_CONST = {
  funny: [
    "Hera Pheri",
    "Andaz Apna Apna",
    "Bhagam Bhag",
    "Golmaal: Fun Unlimited",
    "Chupke Chupke"
  ],
  romantice: [
    "Dilwale Dulhania Le Jayenge",
    "Kuch Kuch Hota Hai",
    "Jab Tak Hai Jaan",
    "Hum Dil De Chuke Sanam",
    "2 States"
  ],
  crime: [
    "Gangs of Wasseypur",
    "Drishyam",
    "Talaash",
    "Kahaani",
    "Special 26"
  ],
  random: [
    'Inception',
    'Gladiator',
    'Jaws',
    'Gravity',
    'Memento',
    'Se7en',
    'Whiplash',
    'Avatar',
    'Divergent',
    'Speed'
  ],
  hindi: [
    'Dangal',
    'PK',
    '3 Idiots',
    'Lagaan',
    'Sholay',
    'Dilwale Dulhania Le Jayenge',
    'Queen',
    'Gully Boy',
    'Andhadhun',
    'Kahaani'
  ]
};


export const toSetSearchInLocal = (inputValue) => {
  let historyArray = window.localStorage.getItem('history');

  historyArray = historyArray ? JSON.parse(localStorage.getItem('history')) : [];

  let tmpArray = historyArray?.filter((val) => {
    return val !== inputValue;
  });

  tmpArray?.length === 10 &&   tmpArray.shift();
  tmpArray?.push(inputValue);

  localStorage.setItem('history', JSON.stringify(tmpArray));
}