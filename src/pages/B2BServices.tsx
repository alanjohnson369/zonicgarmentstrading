import { Link } from 'react-router-dom';
import { Package, Palette, Clock, Award, Users, Shield } from 'lucide-react';

function B2BServices() {
  const benefits = [
    {
      icon: Package,
      title: 'Bulk Manufacturing Capability',
      description: 'Large-scale production with consistent quality across all orders',
    },
    {
      icon: Palette,
      title: 'Custom Branding & Embroidery',
      description: 'Add your company logo and customize colors to match your brand',
    },
    {
      icon: Shield,
      title: 'Premium Breathable Fabrics',
      description: 'High-quality materials ensuring comfort throughout long shifts',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround Time',
      description: 'Quick production and delivery to meet your business needs',
    },
  ];

  const services = [
    {
      title: 'Corporate Office Uniforms',
      description: 'Professional attire that reflects your company culture',
      image: 'https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Medical & Healthcare Uniforms',
      description: 'Comfortable and hygienic uniforms for medical professionals',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Hospitality Uniforms',
      description: 'Elegant uniforms for hotels, restaurants, and service industry',
      image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Industrial Workwear',
      description: 'Durable and safe workwear for industrial environments',
      image: 'https://images.pexels.com/photos/8520526/pexels-photo-8520526.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Business Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Package, value: '50K+', label: 'Uniforms Delivered' },
    { icon: Shield, value: '100%', label: 'Quality Guaranteed' },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#111827] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Corporate Uniform Solutions for Businesses</h1>
          <p className="text-xl opacity-90">
            Custom-designed uniforms that elevate your brand identity
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-[#111827] mb-6">Why Businesses Choose Us</h2>
            <p className="text-lg text-[#6b7280] mb-8">
              In today's competitive business world, first impressions matter and your team's
              appearance speaks volumes about your brand. Our Corporate Uniform Collection is designed
              to elevate professionalism, foster team unity, and reflect your company's identity with
              sophistication.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827] mb-1">{benefit.title}</h3>
                      <p className="text-[#6b7280]">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96">
            <img
              src="https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Corporate uniforms"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-[#111827] mb-12">
            Our B2B Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#111827] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#6b7280]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-[#16a34a]" />
                </div>
                <div className="text-4xl font-bold text-[#111827] mb-2">{stat.value}</div>
                <div className="text-[#6b7280]">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#111827] to-[#1f2937] rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Request a Custom Quote</h2>
          <p className="text-xl opacity-90 mb-8">
            Get competitive B2B pricing for your uniform needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#16a34a] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#15803d] transition-colors"
          >
            Get B2B Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}

export default B2BServices;
