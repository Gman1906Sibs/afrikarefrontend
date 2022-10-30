import hpgrowth from "../images/products/hpgrowth.png";
import bathmelt from "../images/products/bathmelt.png";
import beardbutter from "../images/products/beardbutter.png";
import beardoil from "../images/products/beardoil.png";
import bodyscrub from "../images/products/bodyscrub.png";
import lpgrowth from "../images/products/lpgrowth.png";
import skinserum from "../images/products/skinserum.png";



const products = [
  {
    _id: "11",
    name: "High porosity growth oil : 250ml",
    image: hpgrowth,
    description:
      "A combination of oils that controls hair loss, thickens hair,helps treat dandruff,repair split ends and boosts Hair growth .This product is used daily as a moisture sealant.Ingredients: Olive oil,Castor oil and essential oils.",
    price: 155,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "12",
    name: "Low porosity growth oil : 550mls",
    image: lpgrowth,
    description:
      "A combination of oils that controls hair loss, thickens hair,helps treat dandruff,repair split ends and boosts Hair growth .This product is used daily as a moisture sealant .Ingredients: Jojoba oil, Grapeseed oil and essential oils.",
    price: 155,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "13",
    name: "Body scrub : 250g",
    image: bodyscrub,
    description:
      "This product is responsible for exfoliating, removing dead cells from the outer layer of the skin and leaving the skin soft and nourished. Ingredients: Sugar,coconut oil,shea butter and essential oils",
    price: 120,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    _id: "14",
    name: "Bath melt : 100g",
    image: bathmelt,
    description:
      "A combination of butters and oils,this product is responsible for nourishing because it contains shea butter .It can be used interchangeably as a lotion bar leaving your skin feeling silky and smooth. Ingredients:Shea butter,cocoa butter,coconut oil ,essential oils",
    price: 80,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    _id: "15",
    name: "Skin brightening serum : 30mls",
    image: skinserum,
    description:
      "A combination of light oils,this product is responsible for clearing skin to give the skin its natural glow. Ingredients:Grapeseed oil,jojoba oil and essential oils",
    price: 70,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "16",
    name: "Beard butter : 50mls",
    image: beardbutter,
    description:
      "Description: A natural blend of butters oils that is responsible for nourishing and protects the beard from dryness and brakage",
    price: 100,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "17",
    name: "Beard Oil : 50mls",
    image: beardoil,
    description:
      "A combination of oils,this product is responsible for boosting hair growth. Ingredients:Grapeseed oil,coconut oil and essential oils",
    price: 70,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
];

export default products;
