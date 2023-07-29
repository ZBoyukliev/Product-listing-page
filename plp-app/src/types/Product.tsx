interface Product {
    _id: number;
    title: string;
    description: string;
    category:string;
    price: number;
    discountedPrice?: number;
    rating: number;
    imageUrl: string;
  }

  export default Product;