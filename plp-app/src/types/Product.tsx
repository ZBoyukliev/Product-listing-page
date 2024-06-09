interface Product {
    _id: number;
    title: string;
    description: string;
    category:string;
    color:string;
    price: number;
    discountPrice?: number;
    rating: number;
    imageUrl: string;
  }

  export default Product;
