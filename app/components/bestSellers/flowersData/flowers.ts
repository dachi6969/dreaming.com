export interface Flower {
    name: { en: string; ka: string };
    priceUSD: number;
    img: string;
  }
  
  export const flowers: Flower[] = [
    { name: { en: "Rose", ka: "ვარდი" }, priceUSD: 15, img: "roses.jpg" },
    { name: { en: "Lily", ka: "შროშანი" }, priceUSD: 10, img: "lily.jpg" },
    { name: { en: "Tulip", ka: "ტიტა" }, priceUSD: 12, img: "tulip.jpg" },
    { name: { en: "Daisy", ka: "გვირილა" }, priceUSD: 11, img: "daisy.jpg" },
    { name: { en: "Chrysanthemum", ka: "ქრიზანთემა" }, priceUSD: 9, img: "Chrysanthemum.jpg" },
    { name: { en: "Carnation", ka: "მიხაკი" }, priceUSD: 18, img: "Carnation.jpg" },
    { name: { en: "Lavender", ka: "ლავანდა" }, priceUSD: 6, img: "Lavender.jpg" },
    { name: { en: "Orchid", ka: "ორქიდეა" }, priceUSD: 11, img: "Orchid.jpg" },
    { name: { en: "Sunflower", ka: "მზეაყვავილა" }, priceUSD: 12, img: "Sunflower.jpg" },
    { name: { en: "Bouquet", ka: "თაიგული" }, priceUSD: 22, img: "bouquet2.jpg" },
    { name: { en: "Sun Kiss", ka: "მზის კოცნა" }, priceUSD: 19, img: "bouquet1.jpg" },
    { name: { en: "Spring", ka: "გაზაფხული" }, priceUSD: 25, img: "bouquet3.jpg" },
  ];
  