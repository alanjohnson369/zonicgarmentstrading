import { Truck, Shield, Headphones, Award } from 'lucide-react';

function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick turnaround on all orders',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Premium fabrics and craftsmanship',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always here to help you',
    },
    {
      icon: Award,
      title: 'Trusted by 500+ Businesses',
      description: 'Industry-leading uniform supplier',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#16a34a] rounded-full flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">{badge.title}</h3>
                <p className="text-[#6b7280]">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;
