import ProductCard from './ProductCard';
import { Product } from '../types';

function TopPicks() {
  const products: Product[] = [
    {
      id: '1',
      title: 'Surgical Cap - Unisex | Adjustable Fit | Premium Gaberdine Fabric',
      price: 55,
      image: 'https://images.pexels.com/photos/8460412/pexels-photo-8460412.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Best Seller',
    },
    {
      id: '2',
      title: 'Unisex Full Sleeve White Lab Coat - 100% Polyester',
      price: 85,
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Best Seller',
    },
    {
      id: '3',
      title: 'Unisex Half Sleeve White Lab Coat - 35% Cotton 65% Polyester',
      price: 120,
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Best Seller',
    },
    {
      id: '4',
      title: "Chef's Coat - Double Breasted | Professional Kitchen Uniform",
      price: 95,
      image: 'https://images.pexels.com/photos/6646167/pexels-photo-6646167.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Best Seller',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
          TOP PICKS
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

export default TopPicks;
