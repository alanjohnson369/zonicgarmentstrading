import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/971XXXXXXXXX', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors z-50 flex items-center gap-2"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden lg:inline-block">Chat with us</span>
    </button>
  );
}

export default WhatsAppButton;
