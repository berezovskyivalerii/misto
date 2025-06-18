import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Marquee from '../components/Marquee';
const text_marquee=["Безкоштовна доставка від 300 грн*"]
export function MainPage() {
    return (
        <div>
            <Marquee phrases={text_marquee} />
            <Header />
            <main className="max-w-[110rem] mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}