import { useEffect, useState } from "react";

const Category = () => {

    const [category, setCategory] = useState<string[]>([])
    
    const fetchCategory = async () => {
        const data = await fetch("https://dummyjson.com/products/category-list");
        const json = await data.json();
        // console.log(json);
        setCategory(json);
    }

    useEffect(() => {
        fetchCategory();
    }, [])

    const getImage = (category: string) => `./src/assets/category/${category}.jpg`;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
  <div className="flex flex-wrap gap-10 justify-between items-center rounded-2xl relative">
   {category.map((cat) => (
      <div key={cat}>
        <div
          className="relative w-70 h-50 rounded-lg bg-cover bg-center overflow-hidden cursor-pointer"
          style={{ backgroundImage: `url(${getImage(cat)})` }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-700"></div>
          <div className="relative z-10 flex items-end pb-7 capitalize justify-center h-full text-white font-semibold text-lg">
            {cat}
          </div>
        </div>
      </div>
   ))}
  </div>
</div>
    )
}

export default Category;