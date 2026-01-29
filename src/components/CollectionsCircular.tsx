import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Collection } from '../types';

function CollectionsCircular() {
  const collections: Collection[] = [
    {
      id: '1',
      title: 'Educational Uniforms',
      image: 'https://images.pexels.com/photos/8500456/pexels-photo-8500456.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      title: 'Sports Uniforms',
      image: 'https://images.pexels.com/photos/8007407/pexels-photo-8007407.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      title: 'Accessories',
      image: 'https://images.pexels.com/photos/1019033/pexels-photo-1019033.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '4',
      title: 'Salon & Spa Uniforms',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '5',
      title: 'Housekeeping Uniforms',
      image: 'https://images.pexels.com/photos/6195276/pexels-photo-6195276.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
          SHOP OUR COLLECTIONS
        </h2>

        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 px-12">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="flex-shrink-0 text-center group cursor-pointer"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-gray-100 group-hover:border-[#16a34a] transition-colors">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-[#111827] group-hover:text-[#16a34a] transition-colors">
                  {collection.title}
                </h3>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CollectionsCircular;
