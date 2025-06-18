import CategorySidebar from './CategorySidebar';
import Slider from './Slider';
import RecommendationSection from './RecommendationSection';
import OfferSection from './OfferSection';
import { categories } from '../db/data';
import { recommendations, offers } from '../db/cards';

const slidesDesktop = [
  './poster1.png',
  './poster2.png',
  './poster3.png',
];

const slidesMobile = [
  './poster1_mobile.png',
  './poster2_mobile.png',
  './poster3_mobile.png',
];

export default function CatalogLayout() {
  return (
    <div className="w-full flex justify-between">
      <CategorySidebar categories={categories} />

      <div className="w-full max-w-[1310px] px-4 sm:px-0">

        <div className="w-full max-w-[1310px] mx-auto flex flex-col gap-8">
          <Slider slides={slidesDesktop} mobileSlides={slidesMobile}/>

          <RecommendationSection items={recommendations} />
          <OfferSection items={offers} />
        </div>
      </div>
    </div>
  );
}