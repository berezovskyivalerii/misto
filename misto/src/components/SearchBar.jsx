// src/components/SearchBar.jsx
import { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative flex w-full min-w-[300px] max-w-[790px]"
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Я шукаю..."
                className="w-full h-12 pr-32 pl-14 rounded-[15px]
                   border-2 outline-none border-[--color-brown]
                   focus:border-purple-500"
            />

            <img src="./search_icon.png" alt="search"
                className="w-7 h-7 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />

            <img src="./mic_icon.png" alt="microphone"
                className="w-7 h-7 absolute right-32 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            />

            <button
                type="submit"
                className="absolute right-0 top-0 h-full px-6
                   bg-[--color-purple] text-2xl text-[--color-yellow]
                   text-white rounded-[15px]"
            >
                Знайти
            </button>
        </form>
    );
}
