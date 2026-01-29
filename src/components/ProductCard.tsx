import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden bg-white aspect-square border border-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-[#16a34a] text-white text-xs font-medium px-3 py-1 rounded">
            {product.badge}
          </span>
        )}
        <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#16a34a] hover:text-white">
          <ShoppingCart size={20} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-[#111827] mb-2 line-clamp-2 group-hover:text-[#16a34a] transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          {product.maxPrice ? (
            <>
              <span className="text-lg font-bold text-[#111827]">
                AED {product.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                AED {product.maxPrice}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-[#111827]">
              AED {product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
