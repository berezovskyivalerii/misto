import CatalogDesktop from './CatalogDesktop';
import CatalogMobile  from './CatalogMobile'; 

type ColumnGroup = { subtitle: string; items: string[] };
type Category = { id: string; title: string; icon: string; columns: ColumnGroup[] };

export default function CatalogWrapper(props: {
  categories: Category[];
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* mobile (< 768 px) */}
      <div className="md:hidden">
        <CatalogMobile {...props} />
      </div>

      {/* desktop (≥ 768 px) */}
      <div className="hidden md:block">
        <CatalogDesktop {...props} />
      </div>
    </>
  );
}