const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const mockTailLists = [
  {
    name: "Nojito",
    country: "US",
    detail: "300 ml",
    price: "$10",
  },
  {
    name: "Shirley Temple",
    country: "US",
    detail: "350ml",
    price: "$49",
  },
  {
    name: "Virgin Piña Colada",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

// src/constants/cocktailsData.js

export const cocktailsData = [
  {
    id: "cocktail1",
    name: "Zubrowka Green Groove",
    shortDescription:
      "A shimmering green twist on Polish tradition, the Zubrowka Green Groove entices with fresh orchard apple, crisp lime, and a hint of herbal magic. Sip this drink and you'll feel like you're dancing barefoot in a mystical bison meadow—unexpected, refreshing, and completely unforgettable.",
    imgPath: "/images/zubranko-removebg-preview.png",
    recipe: [
      "40ml Zubrowka Bison Grass Vodka (green)",
      "60ml freshly-pressed apple juice",
      "20ml lime juice",
      "10ml elderflower cordial",
      "Top with chilled lemonade or tonic",
      "Mint, apple slice, and bison grass (or lemongrass) for garnish",
      "Ice",
    ],
    instruction:
      "Fill a tall glass with ice.pour in Zubrowka, apple juice, lime juice, and elderflower cordial.Stir gently, then top with lemonade or tonic for sparkle and fizz.Garnish with a fresh mint sprig, an apple slice, and a stalk of lemongrass (for the elusive bison grass effect).Raise your glass to friendship and bison-powered adventures!",
  },
  {
    id: "cocktail2",
    name: "Spiced Velvet Becherini",
    shortDescription:
      "A dazzling fusion of Becherovka’s legendary spice and luscious citrus, this cocktail sparkles with ginger warmth and orange zest. Like a Czech carnival in a glass, the first sip is intriguing, the second thoroughly addictive—a spicy adventure you’ll want to repeat!.",
    imgPath: "/images/bech.png",
    recipe: [
      "40ml Becherovka Original",
      "20ml vodka",
      "30ml fresh orange juice",
      "10ml fresh lemon juice",
      "10ml ginger syrup",
      "60ml tonic water (to top)",
      "Twist of orange peel and star anise",
      "Ice",
    ],
    instruction: [
      "Fill a tall glass with ice.",
      "Pour in Becherovka, vodka, orange juice, lemon juice, and ginger syrup.",
      "Stir gently for a few seconds.",
      "Top off with the tonic water and give a gentle mix.",
      "Garnish with a twist of orange peel and a floating star anise.",
      "Serve with a grin and enjoy the spicy ride!",
    ],
  },
  {
    id: "cocktail3",
    name: "Soplica Temptation",
    shortDescription:
      "Tart, zesty, and playfully sweet, this cocktail sparkles with the vibrant flavor of Soplica Citron and just a touch of fancy mischief. Every sip is like a sunny Polish afternoon with a hilarious twist of temptation—one glass and you're grinning z-citron cheek to cheek.",
    imgPath: "/images/Soplica.png",
    recipe: [
      "40ml Soplica Citron",
      "20ml premium gin",
      "25ml fresh lemon juice",
      "10ml elderflower syrup",
      "60ml tonic water (chilled)",
      "2 cucumber slices",
      "Sprig of fresh mint (for garnish)",
      "Ice cubes",
    ],
    instruction: [
      "In a shaker filled with ice, combine Soplica Citron, gin, lemon juice, elderflower syrup, and ginger syrup.",
      "Shake well until chilled.",
      "Strain into a highball glass over ice.",
      "Top up with tonic water.",
      "Add cucumber slices and mint sprig for decoration.",
      "Serve immediately and enjoy a taste as tempting as a wink on a summer day!",
    ],
  },
  {
    id: "cocktail4",
    name: "Metaxa Olympian Muse",
    shortDescription:
      "Luxuriously smooth with hints of honey and aged oak, the Metaxa Opulent Twist wraps you in a warm embrace of Mediterranean charm. It's like sipping a golden sunset with a playful wink — bold, elegant, and utterly unforgettable.",
    imgPath: "/images/metaxa1.png",
    recipe: [
      "2 oz Metaxa 5 Stars",
      "1 oz fresh lime juice",
      "2 honey syrup",
      "6-8 fresh mint leaves",
      "Soda water",
      "Muddle mint with sugar and lime juice, add Metaxa and ice, top with soda water, stir gently, garnish with mint.",
    ],
    instruction: [
      "Fill a mixing glass with ice cubes.",
      "Pour in Metaxa 5 Stars, orange juice, honey syrup, lemon juice, and bitters.",
      "Stir gently for about 20 seconds to chill and blend flavors.",
      "Strain into a rocks glass filled with fresh ice.",
      "Garnish with an orange twist and a star anise for an exotic touch.",
      "Sip slowly and enjoy the opulent Mediterranean spirit with a cheeky smile!",
    ],
  },
  {
    id: "cocktail5",
    name: "Barcelona Bliss Brandy",
    shortDescription:
      "A swirling masterpiece of Spanish brandy, honeyed citrus, and aromatic bitters, this cocktail is as opulent and artful as a Gaudí mosaic. Each sip is a toast to creativity—luxuriously smooth, unexpectedly bright, and with a flourish that would make even the Sagrada Familia jealous.",
    imgPath: "/images/jaime.png",
    recipe: [
      "45ml Torres Jaime brandy",
      "20ml blood orange liqueur (or orange liqueur)",
      "10ml Pedro Ximénez sherry",
      "10ml honey syrup (1:1 honey and water)",
      "2 dashes chocolate bitters",
      "Orange twist and edible flower (for garnish)",
      "Ice",
    ],
    instruction: [
      "Fill a mixing glass with ice.",
      "Add the Torres Jaime brandy, blood orange liqueur, Pedro Ximénez sherry, honey syrup, and chocolate bitters.",
      "Stir gently for about 20 seconds to chill and combine the flavors.",
      "Strain into a chilled coupe or rocks glass.",
      "Garnish with a twist of orange and an edible flower for a touch of Spanish flair.",
      "Admire your artful creation, raise a glass, and let opulence inspire your next masterpiece!",
    ],
  },
  {
    id: "cocktail6",
    name: "Laddie Luxury",
    shortDescription:
      "Smoky, floral, and deliciously smooth, this cocktail is a windswept love letter to the Scottish isles—opulent in spirit, with just a cheeky hint of heather and sunshine. One sip and you'll be dreaming of misty lochs, rolling green hills, and laughter echoing through stone castles.",
    imgPath: "/images/bruichl1.png",
    recipe: [
      "50ml Bruichladdich The Classic Laddie Scotch whisky",
      "20ml honey-ginger syrup (1:1 honey and water, infused with fresh ginger)",
      "15ml fresh lemon juice",
      "25ml cloudy apple juice",
      "2 dashes Angostura bitters",
      "Lemon twist and heather sprig (for garnish)",
      "Ice cubes",
    ],
    instruction: [
      "Fill a rocks glass or heavy tumbler with large ice cubes.",
      "Add Bruichladdich, honey-ginger syrup, lemon juice, apple juice, and bitters.",
      "Stir well for 15–20 seconds until perfectly chilled.",
      "Garnish with a twist of lemon and, if you can find one, a sprig of heather.",
      "Raise your glass, toast to Highland adventures, and savor the opulent, playful spirit of Islay!",
    ],
  },
  {
    id: "cocktail7",
    name: "Glen Opal Haze",
    shortDescription:
      "Velvety and exquisitely rich, this cocktail captures the spirit of Highland mist—opulent Glenfiddich 21, golden fruit, and a seductive hint of spice. It's like sipping on a foggy Scottish sunrise, where every swallow reveals a new, luxurious secret.",
    imgPath: "/images/glen1.png",
    recipe: [
      "50ml Glenfiddich 21 Year Old Single Malt",
      "20ml pear nectar",
      "10ml apricot liqueur",
      "10ml fresh lemon juice",
      "2 dashes orange bitters",
      "Bar spoon of honey syrup (1:1 honey and water)",
      "Dehydrated pear slice and a pinch of edible gold glitter (for garnish)",
      "Ice cubes",
    ],
    instruction: [
      "Fill a mixing glass with ice.",
      "Add Glenfiddich 21, pear nectar, apricot liqueur, lemon juice, bitters, and honey syrup.",
      "Stir well until perfectly chilled and silky.",
      "Strain into a coupe or rocks glass over large ice.",
      "Garnish with a dehydrated pear slice and a twinkle of edible gold glitter.",
      "Toast to opulent nights and Highland horizons!",
    ],
  },
  {
    id: "cocktail8",
    name: "Herbal Botanic Bramble",
    shortDescription:
      "A garden in a glass—Botanist gin, fresh blackberries, and mint create a lush, juicy cocktail that tingles with English countryside charm. As vivid as a summer hedge, it’s tasty, cheeky, and delightfully refreshing.",
    imgPath: "/images/bot1.png",
    recipe: [
      "45ml The Botanist Gin",
      "20ml blackberry liqueur",
      "20ml fresh lemon juice",
      "10ml gapefruit syrup",
      "4 fresh blackberries",
      "Mint sprig (for garnish)",
      "Crushed ice",
    ],
    instruction: [
      "Muddle blackberries with syrup and lemon juice in a shaker.",
      "Add the Botanist gin and ice, then shake well.",
      "Strain into a rocks glass over crushed ice.",
      "Drizzle with blackberry liqueur and garnish with mint.",
    ],
  },
  {
    id: "cocktail9",
    name: "Jamaican Gold Rush",
    shortDescription:
      "Sun-drenched and outrageously smooth, this cocktail channels the golden soul of Jamaica with every sip. Appleton Estate’s rich, opulent character gets a carnival twist—zesty, tropical, and a little bit cheeky, leaving you grinning like you just found buried treasure.",
    imgPath: "/images/appleton1.png",
    recipe: [
      "50ml Appleton Estate Rum",
      "25ml fresh pineapple juice",
      "20ml fresh lime juice",
      "10ml honey syrup (1:1 honey and water)",
      "2 dashes Angostura bitters",
      "Top with ginger beer",
      "Pineapple wedge and mint sprig (for garnish)",
      "Ice cubes",
    ],
    instruction: [
      "Fill a tall glass with ice cubes.",
      "Pour in Appleton Estate rum, pineapple juice, lime juice, and honey syrup.",
      "Add bitters and stir gently to chill.",
      "Top with ginger beer for a sparkling finish and stir lightly.",
      "Garnish with a pineapple wedge and a sprig of mint.",
      "Sip, smile, and let the taste of opulent Jamaica transport you to paradise!",
    ],
  },
  {
    id: "cocktail10",
    name: "Étoile de Luxe",
    shortDescription:
      "Lush, golden, and dazzlingly smooth, this cocktail radiates the royal charm of Remy Martin Accord Royal—France in a glass! Each sip is a parade of sunlit fruit, rich caramel, and a flourish of opulent sparkle that'll have you speaking fluent ‘ooh la la!’",
    imgPath: "/images/remy1.png",
    recipe: [
      "45ml Remy Martin Accord Royal cognac",
      "25ml fresh white grape juice",
      "15ml elderflower liqueur",
      "10ml fresh lemon juice",
      "2 dashes orange bitters",
      "Garnish: green grape and twist of lemon",
      "Ice cubes",
    ],
    instruction: [
      "Fill a coupe or large wine glass with ice cubes.",
      "Add cognac, grape juice, elderflower liqueur, lemon juice, and bitters.",
      "Stir gently to mix and chill.",
      "Top with a generous splash of brut Champagne for opulent bubbles.",
      "Garnish with a green grape and a twist of lemon.",
      "Toast to French luxury and let the golden glow begin!",
    ],
  },
  {
    id: "cocktail11",
    name: "Noir Orange Éclair",
    shortDescription:
      "Silky, vibrant, and dangerously delicious, this cocktail brings French opulence with a bold twist of bitter orange and mellow cognac. The flavor is rich and sunny by day, mysterious and sparkling by night—an irresistible invitation to indulge your senses.",
    imgPath: "/images/noir2.png",
    recipe: [
      "45ml Cointreau Noir",
      "25ml VSOP cognac",
      "20ml fresh blood orange juice",
      "10ml lemon juice",
      "10ml honey syrup (1:1 honey and water)",
      "2 dashes orange bitters",
      "Orange peel and dark chocolate shard (for garnish)",
      "Ice cubes",
    ],
    instruction: [
      "Fill a cocktail shaker with ice cubes.",
      "Add Cointreau Noir, cognac, blood orange juice, lemon juice, honey syrup, and orange bitters.",
      "Shake vigorously until well chilled.",
      "Strain into a chilled coupe glass.",
      "Garnish with a twisted orange peel and a shard of dark chocolate.",
      "Sip and let the French noir mood wash over you—c'est magnifique!",
    ],
  },
  {
    id: "cocktail12",
    name: "Aged Deer Elixir",
    shortDescription:
      "A rich, herbaceous blend aged gracefully in German and American oak, this cocktail is a refined nod to Jagermeister Manifest’s deep character. Think dark forest magic with a hint of smoky sweetness—a bold, opulent sip that commands both respect and a cheeky grin.",
    imgPath: "/images/jaeger1.png",
    recipe: [
      "50ml Jagermeister Manifest",
      "20ml maple syrup",
      "15ml fresh lemon juice",
      "10ml spiced ginger liqueur",
      "2 dashes Angostura bitters",
      "Orange twist and star anise (for garnish)",
      "Ice cubes",
    ],
    instruction: [
      "Fill a mixing glass with ice cubes.",
      "Add Jagermeister Manifest, maple syrup, lemon juice, ginger liqueur, and bitters.",
      "Stir slowly for 20 seconds to chill and blend flavors.",
      "Strain into a rocks glass with fresh ice.",
      "Garnish with an orange twist and a star anise for that wild, aged forest vibe.",
      "Sip with reverence and a smirk—this elixir tells a story!",
    ],
  },
  // Add more cocktails as needed
];


const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
