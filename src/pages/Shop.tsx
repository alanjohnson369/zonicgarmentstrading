import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

function Shop() {
  const [showFilters, setShowFilters] = useState(true);

  const products: Product[] = [
    {
      id: '1',
      title: "Men's V-Neck Medical Scrub Suit - 2-Piece, Twill Polyester 170gsm",
      price: 110,
      maxPrice: 250,
      image: 'https://images.pexels.com/photos/7578833/pexels-photo-7578833.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      title: "Women's White Cotton Lab Coat - Doctor's Coat (S-3XL)",
      price: 280,
      maxPrice: 499,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      title: "Men's Medical Scrub Suit - 2-Piece, Poly Viscose 180gsm",
      price: 110,
      image: 'https://images.pexels.com/photos/6129361/pexels-photo-6129361.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '4',
      title: "Men's Half Sleeve Scrub Suit - 2-Piece, Twill Cotton Viscose 180gsm",
      price: 150,
      maxPrice: 350,
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '5',
      title: 'Surgical Cap - Unisex | Adjustable Fit | Premium Gaberdine Fabric',
      price: 55,
      image: 'https://images.pexels.com/photos/8460412/pexels-photo-8460412.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '6',
      title: 'Unisex Full Sleeve White Lab Coat - 100% Polyester',
      price: 85,
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '7',
      title: 'Unisex Half Sleeve White Lab Coat - 35% Cotton 65% Polyester',
      price: 120,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '8',
      title: "Chef's Coat - Double Breasted | Professional Kitchen Uniform",
      price: 95,
      image: 'https://images.pexels.com/photos/6646167/pexels-photo-6646167.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filterCategories = [
    {
      title: 'Category',
      options: ['Medical Uniforms', 'Chef Uniforms', 'Hospitality', 'Corporate', 'Industrial'],
    },
    {
      title: 'Fabric',
      options: ['Cotton', 'Polyester', 'Cotton Blend', 'Gaberdine'],
    },
    {
      title: 'Industry',
      options: ['Healthcare', 'Hospitality', 'Food Service', 'Corporate'],
    },
    {
      title: 'Gender',
      options: ['Men', 'Women', 'Unisex'],
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center">PRODUCTS</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm">
            <a href="/" className="hover:text-[#16a34a] transition-colors">Home</a>
            <span>/</span>
            <span>Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            <Filter size={20} />
            <span>FILTER BY</span>
          </button>

          <div className="flex items-center gap-2">
            <SlidersHorizontal size={20} />
            <select className="border border-gray-300 rounded px-4 py-2">
              <option>Alphabetically, A-Z</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {showFilters && (
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                {filterCategories.map((category) => (
                  <div key={category.title} className="mb-6 last:mb-0">
                    <h3 className="font-bold text-[#111827] mb-3">{category.title}</h3>
                    <div className="space-y-2">
                      {category.options.map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-[#6b7280]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#111827] text-white rounded">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
