import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Business Address',
      content: 'Dubai, United Arab Emirates',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+971 XX XXX XXXX',
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'info@justneedles.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2 animate-fade-in">CONTACT</h1>
          <p className="text-gray-300 animate-fade-in animation-delay-100">We're here to help and answer any question you might have</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-6">Contact Us</h2>
            <p className="text-[#6b7280] mb-8">
              Have questions about our products or services? We're here to help. Fill out the form
              below and we'll get back to you as soon as possible.
            </p>

            {submitted ? (
              <div className="bg-[#16a34a] text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-2">Thank you for contacting us!</h3>
                <p>We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#111827] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#111827] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#111827] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-[#111827] mb-2"
                  >
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none"
                  >
                    <option value="">Select your business type</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="corporate">Corporate</option>
                    <option value="industrial">Industrial</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                    Requirement Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16a34a] focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your uniform requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#111827] text-white py-4 rounded-lg font-medium hover:bg-[#16a34a] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="bg-[#f9fafb] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#111827] mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
                          <Icon size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111827] mb-1">{info.title}</h4>
                        <p className="text-[#6b7280]">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl overflow-hidden h-64">
              <div className="w-full h-full flex items-center justify-center text-[#6b7280]">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Map Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
