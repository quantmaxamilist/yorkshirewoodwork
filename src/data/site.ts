// Yorkshire Woodwork — all copy is drawn from yorkshirewoodwork.co.uk.
import productsJson from './products.json';

export const site = {
  name: 'Yorkshire Woodwork',
  legal: 'Yorkshire Woodwork LTD',
  url: 'https://www.yorkshirewoodwork.co.uk',
  tagline: 'Proper Yorkshire Joinery',
  region: 'West Yorkshire',
  email: 'George@yorkshirewoodworkltd.com',
  mobile: '07470 443001',
  mobileHref: 'tel:+447470443001',
  landline: '01422 244653',
  landlineHref: 'tel:+441422244653',
};

export const nav = [
  { label: 'Bespoke', href: '/bespoke/' },
  { label: 'Our Work', href: '/work/' },
  { label: 'Shop', href: '/shop/' },
  { label: 'Yorkshire Willow', href: '/yorkshire-willow/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const intro = {
  lead: 'Yorkshire Woodwork is a small but rapidly growing brand, specialising in proper Yorkshire joinery work and bespoke handmade furniture.',
  body: 'Every piece we make is created by hand in our small workshop, based in West Yorkshire. Our online shop lists some of our most popular products. However, we love nothing more than bringing your ideas to life with one-off custom pieces.',
};

export const george = {
  name: 'George King',
  role: 'Director',
  quote: 'I first started Yorkshire Woodwork to help people realise how great their homes could be. I have a passion for design and detail and want to bring this into my customer’s projects.',
  image: '/img/george-king.webp',
};

export const projects = [
  {
    slug: 'howdens-kitchen-install',
    title: 'Howdens Kitchen Install',
    tag: 'Kitchen & living space',
    image: '/img/projects/howdens-kitchen.webp',
    w: 2000, h: 900,
    text: 'We turned this basic kitchen and lounge into a one of a kind room. With a solid wood Howdens kitchen paired with solid oak work surfaces and cladding and shaker style panelling to the walls, we created a truly stunning room for the whole family to enjoy.',
    features: ['Solid wood Howdens kitchen', 'Solid oak work surfaces', 'Oak cladding', 'Shaker style wall panelling'],
  },
  {
    slug: 'outdoor-bbq-kitchen',
    title: 'Outdoor BBQ Kitchen',
    tag: 'Outdoor joinery',
    image: '/img/projects/outdoor-bbq-kitchen.webp',
    w: 1512, h: 1512,
    text: 'The customer wanted an outdoor area to sit his pizza oven and BBQ, with space to prepare food as well as store cooking equipment. We constructed the whole kitchen from solid British oak and finished it with a clear oil to look good year round. Everything was custom made on site to suit the space.',
    features: ['Solid British oak throughout', 'Clear oil finish', 'Pizza oven & BBQ housing', 'Custom made on site'],
  },
  {
    slug: 'kitchen-makeover',
    title: 'Kitchen Makeover',
    tag: 'Design & fit',
    image: '/img/projects/kitchen-makeover.webp',
    w: 1600, h: 900,
    text: 'We were contacted to help a customer who had purchased a house with no kitchen installed. We designed and fitted this stunning Howdens kitchen with solid oak worktops and reclaimed brick slip splashbacks — a new kitchen to enjoy for years to come.',
    features: ['Designed & fitted', 'Howdens kitchen', 'Solid oak worktops', 'Reclaimed brick slip splashbacks'],
  },
];

export const reviews = [
  {
    quote: 'I’m delighted with the new addition to my garden. Great product and great service from yourselves. I’d also like to commend the friendly young man who delivered the bench and assembled it on a very wet and windy day in Scotland. Cheerful and efficient.',
    name: 'Valerie',
    context: 'Solid oak garden bench',
  },
  {
    quote: 'We had some custom shelves made up by George, he was easy to deal with and always responded quickly. Thanks so much, we love them.',
    name: 'Emma',
    context: 'Custom shelving',
  },
];

// How a bespoke job runs — each step is backed by the existing site copy.
export const process = [
  { n: '01', title: 'Free site visit', text: 'Get in touch and we’ll book in a free site visit to see the space and talk through your ideas.' },
  { n: '02', title: 'Design', text: 'We bring your ideas to life as a one-off design — sized and finished to suit you and your home.' },
  { n: '03', title: 'Made by hand', text: 'Every piece is made by hand in our small workshop in West Yorkshire.' },
  { n: '04', title: 'Fitted or delivered', text: 'Joinery is fitted on site — some pieces are custom made on site to suit the space. Furniture is delivered to your door.' },
];

// Things that show up again and again in their product descriptions.
export const craft = [
  { title: 'Dovetail joinery', text: 'Our oak bedside tables feature full length dovetail joinery on all sides.', image: '/img/products/oak-bedside-table-with-drawer-2.webp' },
  { title: 'Solid timber, not veneer', text: 'Solid oak throughout — “all real oak, so there’s no thin layer of oak, it’s all solid wood.”', image: '/img/products/solid-oak-drawer-set-3.webp' },
  { title: 'Hidden fixings', text: 'Wall pieces hang on concealed brackets and fixings, so nothing spoils the look.', image: '/img/products/floating-oak-bedside-table-1.webp' },
  { title: 'Custom sizes', text: 'If our standard sizes don’t work, message us and we’ll make a custom size to suit your requirements.', image: '/img/products/oak-floating-shelf-2.webp' },
];

export const finishes = [
  { key: 'natural', name: 'Natural oil', note: 'Butchers block or clear oil — food safe on boards, weatherproof on outdoor oak.', image: '/img/products/solid-oak-chopping-board-1.webp' },
  { key: 'satin', name: 'Clear varnish', note: 'Matt, satin or gloss polyurethane — protects from spills and knocks and brings out the grain.', image: '/img/products/oak-bar-stool-1.webp' },
  { key: 'limewash', name: 'Lime wash', note: 'A pale, limed oak finish — shown here on our solid oak drawer set.', image: '/img/products/solid-oak-drawer-set-1.webp' },
  { key: 'painted', name: 'Painted', note: 'Supplied ready to paint, or painted for you in a colour of your choice.', image: '/img/products/solid-wood-bedside-table-with-shelf-2.webp' },
  { key: 'raw', name: 'Weathered oak', note: 'Left raw outdoors, solid oak naturally weathers to a silver colour.', image: '/img/products/solid-oak-garden-bench-1.webp' },
];

export const willow = {
  intro: 'Yorkshire Willow is the new cricket bat brand of Yorkshire Woodwork. We specialise in handmade English willow cricket bats, as well as repair and refurbishment of existing cricket bats. From broken handles to cracked bats, we can do it all.',
  stickers: 'All our handmade bats come with our new stickers, so everyone knows where you got your six hitting bat from.',
  pricing: 'Please contact us for pricing on repairs, as every repair is different.',
  services: [
    { title: 'Handmade cricket bats', text: 'Handmade English willow cricket bats. Grade 1 willow bats made right here in Yorkshire.', image: '/img/willow/bat-shaping.webp' },
    { title: 'Cricket bat repairs', text: 'From regrips to new handles, we do it all. We can repair all kinds of cracks to most parts of the bat to get it back playing again.', image: '/img/willow/bat-handle.webp' },
    { title: 'Refurbishments', text: 'Have an old bat you’d like brought back to life? We can fully sand, re-oil and apply a new scuff sheet and stickers along with a new grip.', image: '/img/willow/bat-refurb.webp' },
    { title: 'Bat stickers', text: 'Want your bat stickered up with our custom made Yorkshire Willow stickers? They’re available to buy to apply to your own bat.', image: '/img/willow/bat-stickers.webp' },
  ],
};

export type Product = {
  slug: string; name: string; price: number; badge: string | null;
  cat: 'bedroom' | 'lounge' | 'outdoor' | 'kitchen' | 'willow';
  timber: string; dims: [string, string][]; summary: string; body: string[];
  options?: string[]; images: { src: string; w: number; h: number }[];
};
export const products = productsJson as unknown as Product[];

export const categories = [
  { key: 'all', label: 'All pieces' },
  { key: 'bedroom', label: 'Bedroom' },
  { key: 'lounge', label: 'Living' },
  { key: 'kitchen', label: 'Kitchen & home' },
  { key: 'outdoor', label: 'Outdoor' },
  { key: 'willow', label: 'Cricket' },
] as const;

export const price = (n: number) => '£' + (Number.isInteger(n) ? n.toLocaleString('en-GB') : n.toFixed(2));
