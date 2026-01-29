import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CollectionsCircular from './components/CollectionsCircular';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStatement from './components/BrandStatement';
import CategoryHighlight from './components/CategoryHighlight';
import StyleCollections from './components/StyleCollections';
import TopPicks from './components/TopPicks';
import Testimonials from './components/Testimonials';
import TrustBadges from './components/TrustBadges';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      <HeroBanner />
      <CollectionsCircular />
      <FeaturedProducts />
      <BrandStatement />
      <CategoryHighlight />
      <StyleCollections />
      <TopPicks />
      <Testimonials />
      <TrustBadges />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
