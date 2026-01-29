import HeroBanner from '../components/HeroBanner';
import CollectionsCircular from '../components/CollectionsCircular';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandStatement from '../components/BrandStatement';
import CategoryHighlight from '../components/CategoryHighlight';
import StyleCollections from '../components/StyleCollections';
import TopPicks from '../components/TopPicks';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';

function Home() {
  return (
    <>
      <HeroBanner />
      <CollectionsCircular />
      <FeaturedProducts />
      <BrandStatement />
      <CategoryHighlight />
      <StyleCollections />
      <TopPicks />
      <Testimonials />
      <TrustBadges />
    </>
  );
}

export default Home;
