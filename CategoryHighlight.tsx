function CategoryHighlight() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-16 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#111827]">
                READY FOR EVERY SHIFT
              </h2>
              <p className="text-lg text-[#6b7280]">
                Uniforms built for comfort, durability, and professional presence
              </p>
              <button className="bg-[#111827] text-white px-8 py-4 text-sm font-medium hover:bg-[#16a34a] transition-colors rounded-lg">
                SHOP WORKWEAR
              </button>
            </div>

            <div className="h-full min-h-[400px] bg-gray-200">
              <img
                src="https://images.pexels.com/photos/8460343/pexels-photo-8460343.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professionals in different industries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryHighlight;
