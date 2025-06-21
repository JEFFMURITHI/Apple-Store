export const navItems = [
  {
    label: 'Home',
    icon: 'bx bx-home-alt-2',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
  {
    label: 'iPhone',
    icon: 'bx bx-mobile-alt',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
  {
    label: 'MacBook',
    icon: 'bx bx-laptop',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
  {
    label: 'Watch',
    icon: 'bx bxs-watch-alt',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
  {
    label: 'iMac',
    icon: 'bx bx-desktop',
    activeIcon: 'bx bxs-folder-open',
    inactiveIcon: 'bx bxs-folder',
  },
];

export const items = [
  { label: 'iPhone', img: 'images/iphone.jpg', pageIndex: 1 },
  { label: 'MacBook', img: 'images/macbook.jpeg', pageIndex: 2 },
  { label: 'Smart Watch', img: 'images/watches.jpeg', pageIndex: 3 },
  { label: 'iMac', img: 'images/imac.jpg', pageIndex: 4 },
];


export const iphoneModels = [
  {
    name: 'iPhone 16 Pro Max',
    description: 'The ultimate iPhone.',
    price: 'From $1,099',
    img: 'images/iphone16-pro-max.jpeg',
  },
  {
    name: 'iPhone 16 Plus',
    description: 'A total powerhouse.',
    price: 'From $799',
    img: 'images/iphone16-plus.jpeg',
  },
  {
    name: 'iPhone 16',
    description: 'As amazing as ever.',
    price: 'From $799',
    img: 'images/iphone16.jpeg',
  },
  // {
  //   name: 'iPhone 15 Pro Max',
  //   description: 'Power refined.',
  //   price: 'From $1,099',
  //   img: 'images/iphone15-pro-max.jpeg',
  // },
  // {
  //   name: 'iPhone 15',
  //   description: 'Everyday extraordinary.',
  //   price: 'From $699',
  //   img: 'images/iphone15.jpeg',
  // },
  // {
  //   name: 'iPhone SE (3rd Gen)',
  //   description: 'Serious power. Serious value.',
  //   price: 'From $429',
  //   img: 'images/iphone-se-3rd-gen.jpeg',
  // },
 ];


 export const macbookModels = [
  {
    chip: 'M2',
    price: 'From $999',
    img: 'images/macbook-air-midnight-m2.jpeg',
    colors: [
      { label: 'Space gray', bg: '#b2b5b8', img: 'images/macbook-air-spacegray-m2.jpeg' },
      { label: 'Gold', bg: '#f0e0d3', img: 'images/macbook-air-gold-m2.jpeg' },
      { label: 'Silver', bg: '#e0e2e1', img: 'images/macbook-air-silver-m2.jpeg' }
    ],
    specs: ['8-Core CPU', '8-Core GPU', '16GB Unified Memory', '256GB SSD Storage'],
    icon: 'images/apple-m2-icon.jpeg'
  },
  {
    chip: 'M3',
    price: 'From $1,299',
    img: 'images/macbook-air-midnight-m3.jpeg',
    colors: [
      { label: 'Space black', bg: '#1c1c1e', img: 'images/macbook-air-spaceblack-m3.jpeg' },
      { label: 'Silver', bg: '#e0e2e1', img: 'images/macbook-air-silver-m3.jpeg' },
      { label: 'Starlight', bg: '#f8e8d3', img: 'images/macbook-air-starlight-m3.jpeg' }
    ],
    specs: ['8-Core CPU', '10-Core GPU', '16GB Unified Memory', '512GB SSD Storage'],
    icon: 'images/apple-m3-icon.jpeg'
  }
];


export const watchModels = [
    {
        imgs: ['images/watch10-side.jpeg', 'images/watch10.jpeg'],
        name: 'Apple Watch Series 10',
        price: 'From $399',
        desc: ['45mm or 41mm case size', '50m water resistant', 'Swimproof'],
    },
    {
        imgs: ['images/watch-hermes-side.jpeg', 'images/watch-hermes.jpeg'],
        name: 'Apple Watch Hermes',
        price: 'From $1,149',
        desc: ['44mm or 40mm case size', '50m water resistant', 'Swimproof'],
    },
    {
        imgs: ['images/watch-se-side.jpeg', 'images/watch-se.jpeg'],
        name: 'Apple Watch SE',
        price: 'From $249',
        desc: ['44mm case size', '10m water resistant', 'Swimproof'],
    },
];


export const imacModels = [
  {
    label: 'Green',
    bg: '#10505b',
    images: {
      side: 'images/imacgreen-side.jpeg',
      front: 'images/imacgreen-front.jpeg',
      back: 'images/imacgreen-back.jpeg',
    },
  },
  {
    label: 'Yellow',
    bg: '#d48207',
    images: {
      side: 'images/imacyellow-side.jpeg',
      front: 'images/imacyellow-front.jpeg',
      back: 'images/imacyellow-back.jpeg',
    },
  },
  {
    label: 'Orange',
    bg: '#e66120',
    images: {
      side: 'images/imacorange-side.jpeg',
      front: 'images/imacorange-front.jpeg',
      back: 'images/imacorange-back.jpeg',
    },
  },
  {
    label: 'Pink',
    bg: '#e79ca4',
    images: {
      side: 'images/imacpink-side.jpeg',
      front: 'images/imacpink-front.jpeg',
      back: 'images/imacpink-back.jpeg',
    },
  },
  {
    label: 'Purple',
    bg: '#7d5d99',
    images: {
      side: 'images/imacpurple-side.jpeg',
      front: 'images/imacpurple-front.jpeg',
      back: 'images/imacpurple-back.jpeg',
    },
  },
  {
    label: 'Silver',
    bg: '#c0c0c0',
    images: {
      side: 'images/imacsilver-side.jpeg',
      front: 'images/imacsilver-front.jpeg',
      back: 'images/imacsilver-back.jpeg',
    },
  },
];


