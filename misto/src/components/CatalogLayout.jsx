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
    <div className="flex">
      <CategorySidebar categories={categories} />

      <main className="flex-1 p-6">
        {/* здесь задаём max-width и центровку */}
        <div className="w-full max-w-[1310px] mx-auto flex flex-col gap-8">
          <Slider slides={sliderImages} />

          {/* эти секции уже будут тянуться на всю доступную ширину контейнера */}
          <RecommendationSection items={recommendations} />
          <OfferSection          items={offers}          />
        </div>
      </main>
    </div>
  );
}