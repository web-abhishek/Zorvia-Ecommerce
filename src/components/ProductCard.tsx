import type { productDataType } from "../utils/product.types"

interface productCardProps {
    productData: productDataType;
}

const ProductCard = ({ productData }: productCardProps) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={productData.thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="w-1/4">
                    <button className="btn btn-soft btn-info">Juice</button>
                </div>
                <div className="flex items-center justify-between">
                    <h2 className="card-title font-bold">{productData.title}</h2>
                    <h2 className="card-title font-bold">{productData.price}</h2>
                </div>
                <p>
                    {productData.description}
                </p>
                <div className="card-actions items-center justify-start mt-5">
                    <button className="btn btn-active">View More</button>
                    <button className="btn btn-active btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;