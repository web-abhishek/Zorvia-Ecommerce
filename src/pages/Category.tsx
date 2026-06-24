import { useEffect, useState } from "react";

const Category = () => {

    const [category, setCategory] = useState<string[]>([])

    const fetchCategory = async() => {
        const data = await fetch("https://dummyjson.com/products/category-list");
        const json = await data.json();
        console.log(json);
        setCategory(json)
    }

    useEffect(() => {
        fetchCategory()
    },[])

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <ul>
            {
                category.map((cat)=>(<li>{cat}</li>))
                }
                </ul>
        </div>
    )
}

export default Category;