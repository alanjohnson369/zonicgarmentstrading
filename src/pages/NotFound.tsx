import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#111827] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#111827] mb-4">Page Not Found</h2>
        <p className="text-lg text-[#6b7280] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#111827] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#16a34a] transition-colors"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
