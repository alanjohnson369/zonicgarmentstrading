function HeroBanner() {
  return (
    <section className="bg-[#e5d5c3] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="border-l-4 border-[#8b7355] pl-6 space-y-2">
              <h1 className="text-5xl lg:text-6xl font-serif italic leading-tight">
                <span className="block text-[#111827]">Dress the Perfect</span>
                <span className="block text-[#8b7355] mt-2">First Impression</span>
              </h1>
              <p className="text-lg text-[#111827] mt-4">
                High-quality professional uniforms that define hospitality and care
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-2xl font-serif italic text-[#8b7355]">
                Uniforms Built for
              </p>
              <p className="text-3xl font-serif italic text-[#8b7355]">
                Superior Comfort
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="bg-[#111827] text-white px-8 py-3 text-sm font-medium hover:bg-[#16a34a] transition-colors">
                SHOP NOW
              </button>
              <button className="border-2 border-[#111827] text-[#111827] px-8 py-3 text-sm font-medium hover:bg-[#111827] hover:text-white transition-colors">
                EXPLORE COLLECTIONS
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6529006/pexels-photo-6529006.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional staff"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6129108/pexels-photo-6129108.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Hospitality uniform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-200 h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/7640744/pexels-photo-7640744.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Medical professional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-white rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-white rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
