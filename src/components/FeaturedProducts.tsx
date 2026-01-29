import ProductCard from './ProductCard';
import { Product } from '../types';

function FeaturedProducts() {
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
      title: "Women's White Cotton Lab Coat - Doctor's Coat by Sonic Garments Trading (S-3XL)",
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
  ];

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
          DESIGNED FOR CARE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
