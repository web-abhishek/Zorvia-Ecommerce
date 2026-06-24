import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import type { productDataType } from "../utils/product.types"

const Products = () => {

    const [products, setProducts] = useState <productDataType[]> ([]);

    const fetchProducts = async () => {
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();
        // console.log(json);
        setProducts(json.products);
    }

    useEffect(() => { 
        fetchProducts();
     },
    [])

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-center text-3xl font-black mb-4">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map((item)=>(<ProductCard key={item.id} productData={item}/>))
                }
            </div>
        </div>
    )
}

export default Products;