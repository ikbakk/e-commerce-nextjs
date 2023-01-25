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
  slug: {
    current: string;
  };
  price: number;
  details: string;
  quantities: number;
}

export interface IContextType {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: any;
  setCartItems: React.Dispatch<any>;
  totalPrice: number;
  totalQuantity: number;
  quantities: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  onAdd: (product: IProduct, quantites: number) => void;
  cartItemQuantity: (id: string, value: 'increase' | 'decrease') => void;
}
