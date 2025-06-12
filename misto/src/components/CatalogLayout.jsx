import CategorySidebar from './CategorySidebar';
import Slider from './Slider';
import RecommendationSection from './RecommendationSection';
import OfferSection from './OfferSection';
import { categories, recommendations, offers } from '../db/data';

const sliderImages  = [
  './gray16x9.jpg',
  './yellow1920x540.webp',
  './red1920x540.jpg',
];

export default function CatalogLayout() {
  return (
    <div className="w-full flex justify-between">
      <CategorySidebar categories={categories}/>

       <div className="w-full max-w-[1310px] px-4 sm:px-0">

        <div className="w-full max-w-[1310px] mx-auto flex flex-col gap-8">
          <Slider slides={sliderImages} />

          <RecommendationSection items={recommendations} />
          <OfferSection          items={offers}          />
        </div>
      </div>
    </div>
  );
}