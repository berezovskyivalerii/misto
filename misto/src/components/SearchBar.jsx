import { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative flex w-full min-w-[100px] max-w-[790px]"
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Я шукаю..."
                className="w-full h-10 sm:h-[60px] pr-8 sm:pr-32 pl-10 sm:pl-14 rounded-[15px]
                   border-2 outline-none border-[--color-brown]
                   focus:border-purple-500"
            />

            <img src="./search_icon.png" alt="search"
                className="w-5 h-5 sm:w-7 sm:h-7 absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />

            <img src="./mic_icon.png" alt="microphone"
                className="w-5 h-5 sm:w-7 sm:h-7 absolute right-14 sm:right-36 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hidden sm:block"
            />

            <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 sm:px-6
                   bg-[--color-purple] text-lg sm:text-2xl text-[--color-yellow]
                   text-white rounded-[15px] hidden sm:block"
            >
                Знайти
            </button>
        </form>
    );
}