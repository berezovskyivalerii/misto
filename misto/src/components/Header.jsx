import { useState } from 'react';
import Marquee from "./Marquee";
import SearchBar from "./SearchBar";
import CatalogButton from "./CatalogButton";
import SidePanel from "./SidePanel";

const text_marquee = ['Безкоштовна доставка від 300 грн*\u00A0']

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative">
            <SidePanel isOpen={isMenuOpen} onClose={toggleMenu} />
            
            <Marquee phrases={text_marquee} />
            <div className="mx-auto max-w-[110rem] px-5 py-3 flex">
                <div className="flex items-center gap-16 pr-12">
                    <img 
                        src="./burgermenu_icon.png" 
                        alt="menu" 
                        className="h-7 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={toggleMenu}
                    />
                    <img src="./misto_logo.png" alt="logo" className="h-10" />
                </div>

                <div className="flex items-center gap-10 w-full flex-1">
                    <div className="ml-auto mr-5">
                        <CatalogButton />
                    </div>
                    <div className="flex-1 min-w-[12rem] max-w-[790px]">
                        <SearchBar />
                    </div>

                    <img src="./maleuser_icon.png" alt="user" className="h-10 shrink-0 cursor-pointer hover:opacity-80" />
                    <img src="./scales_icon.png" alt="compare" className="h-10 shrink-0 cursor-pointer hover:opacity-80" />
                    <img src="./shopping_icon.png" alt="cart" className="h-10 shrink-0 cursor-pointer hover:opacity-80" />
                </div>
            </div>
        </header>
    );
}