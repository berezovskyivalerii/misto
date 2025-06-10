import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export function MainPage() {
    return (
        <div>
            <Header />
            <main className="max-w-[110rem] mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}