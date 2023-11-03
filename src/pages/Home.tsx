import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axiosInstance from "../utils/axiosInstance";
import { IProduct } from "../interfaces";

import CategoriesMap from "../components/CategoriesMap";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  /** ---> fetching products on component load */
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axiosInstance.get("/products?limit=30");
    if (res.data) {
      setProducts(res.data.products);
    }
  };

  return (
    <div className="w-full">
      <div className="flex mt-20 ">
        <div className="min-w-[15%]  flex flex-col gap-2 ">
          <CategoriesMap />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
