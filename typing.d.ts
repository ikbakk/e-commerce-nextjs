type Image = {
  asset: {
    url: string;
  };
};

export interface IBanner {
  buttonText: string;
  desc: string;
  discount: string;
  image: Image;
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
}

export interface IProduct {
  _id: string;
  image: Image[];
  name: string;
  slug: string;
  price: number;
  details: string;
}
