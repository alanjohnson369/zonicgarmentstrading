import ProductCard from '../components/ProductCard';
import { Product } from '../types';

function SpecialDeals() {
  const dealProducts: Product[] = [
    {
      id: '1',
      title: 'Unisex Chef Jacket - Twill Cotton Blend with Enhanced Safety and Comfort',
      price: 150,
      maxPrice: 350,
      image: 'https://images.pexels.com/photos/6646167/pexels-photo-6646167.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: '57% OFF',
    },
    {
      id: '2',
      title: 'Waitress Uniform - Dress Shirt and Dress Pant',
      price: 150,
      maxPrice: 300,
      image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: '50% OFF',
    },
    {
      id: '3',
      title: "Men's V-Neck Medical Scrub Suit - 2-Piece, Twill Polyester 170gsm",
      price: 110,
      maxPrice: 250,
      image: 'https://images.pexels.com/photos/7578833/pexels-photo-7578833.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: '56% OFF',
    },
    {
      id: '4',
      title: "Men's White Cotton Lab Coat - Professional Doctor's Coat (S-3XL) Made in UAE",
      price: 300,
      maxPrice: 450,
      image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: '33% OFF',
    },
    {
      id: '5',
      title: "Women's White Cotton Lab Coat - Doctor's Coat (S-3XL)",
      price: 280,
      maxPrice: 499,
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: '44% OFF',
    },
    {
      id: '6',
      title: "Men's Medical Scrub Suit - 2-Piece, Poly Viscose 180gsm",
      price: 110,
      maxPrice: 220,
      image: 'https://images.pexels.com/photos/6129361/pexels-photo-6129361.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: '50% OFF',
    },
    {
      id: '7',
      title: "Men's Half Sleeve Scrub Suit - 2-Piece, Twill Cotton Viscose 180gsm",
      price: 150,
      maxPrice: 350,
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: '57% OFF',
    },
    {
      id: '8',
      title: 'Surgical Cap - Unisex | Adjustable Fit | Premium Gaberdine Fabric',
      price: 55,
      maxPrice: 85,
      image: 'https://images.pexels.com/photos/8460412/pexels-photo-8460412.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: '35% OFF',
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wide mb-2">WELCOME TO JUST NEEDLES</p>
          <h1 className="text-4xl font-bold">SPECIAL DEALS</h1>
        </div>
      </div>

      <div className="bg-[#16a34a] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Limited Time Offers on Premium Uniforms</h2>
          <p className="text-lg opacity-90">Up to 60% OFF on selected items</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-[#111827] mb-4">
            Don't Miss Out on These Amazing Deals!
          </h3>
          <p className="text-lg text-[#6b7280] mb-6">
            Premium quality uniforms at unbeatable prices. Limited stock available.
          </p>
          <button className="bg-[#111827] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#16a34a] transition-colors">
            SHOP ALL DEALS
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialDeals;
