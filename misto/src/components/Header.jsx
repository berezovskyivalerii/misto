import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import CatalogButton from "./CatalogButton";
import SidePanel from "./SidePanel";
import CartModal from './CartModal';
import { useCart } from '../context/CartContext';
import CatalogWrapper from './CatalogWrapper';
import { Catalog } from '../db/data';

export default function Header() {
    const { items } = useCart();

    const cartIcon = items.length ? './cart-one.png' : './shopping_icon.png';

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCatalogOpen, setCatalogOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((p) => !p);
    const toggleCatalog = () => setCatalogOpen((p) => !p);

    return (
        <header className="relative shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <SidePanel isOpen={isMenuOpen} onClose={toggleMenu} />

            <div className="mx-auto max-w-[110rem] px-5 py-3 flex">
                <div className="flex items-center gap-4 sm:gap-16 pr-4 sm:pr-12">
                    <img
                        src="./burgermenu_icon.png"
                        alt="menu"
                        className="h-6 sm:h-7 cursor-pointer"
                        onClick={toggleMenu}
                    />
                    <Link to="/">
                        <img src="./misto_logo.png" alt="logo" className="h-6 sm:h-10" />
                    </Link>
                </div>

                <div className="flex items-center gap-4 sm:gap-10 w-full flex-1">
                    <div className="ml-auto mr-2 sm:mr-5 hidden sm:block">
                        <CatalogButton onClick={toggleCatalog} />
                    </div>
                    <div className="flex-1 min-w-[8rem] sm:min-w-[12rem] max-w-[790px]">
                        <SearchBar />
                    </div>

                    <img src="./maleuser_icon.png" alt="user" className="h-12 shrink-0 cursor-pointer hover:bg-[--color-yellow] p-1 transition-colors duration-500 rounded-md hidden sm:block" />
                    <img src="./scales_icon.png" alt="compare" className="h-12 shrink-0 cursor-pointer hover:bg-[--color-yellow] p-1 transition-colors duration-500 rounded-md hidden sm:block" />
                    <img
                        src={cartIcon}
                        alt="cart"
                        onClick={() => setIsCartOpen(true)}
                        className="h-12 cursor-pointer rounded-md p-1 hover:bg-[--color-yellow] transition-colors"
                    />
                    {isCartOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" />
                    )}
                </div>
            </div>
            <CatalogWrapper categories={Catalog} open={isCatalogOpen} onClose={() => setCatalogOpen(false)} />
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        </header>
    );
}