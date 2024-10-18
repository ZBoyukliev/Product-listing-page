import Product from "../../types/Product";
import { Filter } from "../models/filter";

export const setPriceFilteredProducts = (data: Product[], filters: Filter) => {
  let items: Product[];
  if (filters.price === 99.99) {
    items = data.filter((product) => (product.discountPrice || product.price) <= filters.price);
  } else if (filters.price === 299.99) {
    items = data.filter((product) => (product.discountPrice || product.price) >= 100 && (product.discountPrice || product.price) <= filters.price)
  } else if (filters.price === 300) {
    items = data.filter((product) => (product.discountPrice || product.price) >= filters.price);
  } else {
    items = data;
  }
  return items;
}
