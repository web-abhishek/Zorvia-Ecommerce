import type { productDataType } from "../utils/product.types"

interface productCardProps {
    productData: productDataType;
}

const ProductCard = ({ productData }: productCardProps) => {
    const { title, description, category, price, rating, thumbnail, discountPercentage } = productData;
    const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

    return (
        <div className="card card-compact bg-base-100 border border-base-200 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <figure className="relative overflow-hidden rounded-t-xl">
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                    <span className="badge badge-primary badge-outline uppercase text-xs tracking-wider">{category}</span>
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-white text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.049 9.374c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                    <span>{rating.toFixed(1)}</span>
                </div>
            </figure>
            <div className="card-body px-6 py-5">
                <div className="mb-4">
                    <h2 className="card-title text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-base-content/70 line-clamp-3">{description}</p>
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-2xl font-bold text-primary">${price.toFixed(2)}</p>
                        <p className="text-sm text-success">{discountPercentage.toFixed(0)}% off</p>
                    </div>
                    <p className="text-sm text-muted line-through">${originalPrice}</p>
                </div>

                <div className="card-actions flex flex-col gap-3 sm:flex-row">
                    <button className="btn btn-primary w-full">Add to Cart</button>
                    <button className="btn btn-outline w-full">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;