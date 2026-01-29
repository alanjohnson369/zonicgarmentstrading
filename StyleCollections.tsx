import { StyleCollection } from '../types';

function StyleCollections() {
  const collections: StyleCollection[] = [
    {
      title: 'Classic',
      description: 'Timeless cuts and professional silhouettes for a refined look.',
      image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Modern',
      description: "Clean lines and bold choices tailored for today's trendsetters.",
      image: 'https://images.pexels.com/photos/6129245/pexels-photo-6129245.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Relaxed',
      description: 'Breathable fabrics and comfortable fits for long shifts.',
      image: 'https://images.pexels.com/photos/8460392/pexels-photo-8460392.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
          STYLE COLLECTIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.title}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#16a34a] transition-colors">
                  {collection.title}
                </h3>
                <p className="text-[#6b7280]">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StyleCollections;
