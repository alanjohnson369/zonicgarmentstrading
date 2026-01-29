import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      rating: 5,
      text: 'Excellent quality uniforms! Our hospital staff loves the comfort and professional look. Highly recommended for medical facilities.',
      author: 'Dr. Sarah Ahmed',
      date: 'January 15, 2026',
    },
    {
      id: '2',
      rating: 5,
      text: 'We ordered custom uniforms for our hotel and the results exceeded expectations. Great service and fast delivery!',
      author: 'Mohammed Hassan',
      date: 'January 10, 2026',
    },
    {
      id: '3',
      rating: 5,
      text: 'Perfect fit and durable fabric. Our team looks professional and feels comfortable throughout their shifts.',
      author: 'Fatima Ali',
      date: 'January 5, 2026',
    },
    {
      id: '4',
      rating: 5,
      text: 'The B2B service is outstanding. They handled our bulk order professionally and delivered on time.',
      author: 'Khalid Rahman',
      date: 'December 28, 2025',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#111827] mb-12">
          CUSTOMER REVIEWS
        </h2>

        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors -ml-4">
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[#f9fafb] rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#16a34a" stroke="#16a34a" />
                  ))}
                </div>

                <p className="text-[#6b7280] mb-6 line-clamp-4">{testimonial.text}</p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium text-[#111827]">{testimonial.author}</p>
                  <p className="text-sm text-[#6b7280] mt-1">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors -mr-4">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
