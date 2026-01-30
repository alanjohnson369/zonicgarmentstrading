import { useState, useEffect } from 'react';

function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#f8f9fa] to-[#e5d5c3] py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#16a34a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#111827] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="border-l-4 border-[#16a34a] pl-6 space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#111827]">Dress the Perfect</span>
                <span className="block text-[#16a34a] mt-2">First Impression</span>
              </h1>
              <p className="text-lg text-[#111827] mt-4">
                High-quality professional uniforms that define hospitality and care
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-2xl font-semibold text-[#111827]">
                Uniforms Built for
              </p>
              <p className="text-3xl font-bold text-[#16a34a]">
                Superior Comfort
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="bg-[#111827] text-white px-8 py-3 text-sm font-medium hover:bg-[#16a34a] transform hover:scale-105 transition-all duration-300 rounded shadow-lg">
                SHOP NOW
              </button>
              <button className="border-2 border-[#111827] text-[#111827] px-8 py-3 text-sm font-medium hover:bg-[#111827] hover:text-white transform hover:scale-105 transition-all duration-300 rounded">
                EXPLORE COLLECTIONS
              </button>
            </div>
          </div>

          <div className={`relative transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <spline-viewer url="https://prod.spline.design/4fyBM0i40AQhYMXB/scene.splinecode" className="w-full h-full"></spline-viewer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
