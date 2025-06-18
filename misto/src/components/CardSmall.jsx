import { useState } from 'react';

export default function CardSmall({
    image,
    title,
    oldPrice,
    price = '–',
}) {
    const [liked, setLiked] = useState(false);
    const [shopped, setShopped] = useState(false);

    return (
        <div className="group relative w-[165px] sm:w-[190px] max-h-[235px] sm:max-h-[270px] bg-white border border-[#5F5F5F]">
            <img
                src={liked ? './like-filled_icon.png' : './like_icon.png'}
                alt="like"
                onClick={() => setLiked(!liked)}
                className="absolute right-3 top-3 h-6 w-6 cursor-pointer
                   hover:bg-slate-400 rounded-md"
            />            <div className="flex justify-center items-center
                  h-[147px] sm:h-[170px] p-3 pb-0">
                <img
                    src={image}
                    alt={title}
                    className="max-h-full max-w-full object-contain select-none pointer-events-none"
                />
            </div>

            <div className="p-3 sm:p-2 flex flex-col gap-1">
                <h3 className="text-[11px] sm:text-sm line-clamp-2 font-sans tracking-wide
                               group-hover:text-[--color-purple] group-hover:underline">
                    {title}
                </h3>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        {oldPrice && (
                            <span className="text-[10px] sm:text-[10px] line-through text-gray-900 tracking-wide">
                                {oldPrice}₴
                            </span>
                        )}
                        <span className="text-[10px] sm:text-[12px] text-red-500 tracking-wide">{price}₴</span>
                    </div>

                    <button className="p-1 sm:p-2">
                        <img
                            src={shopped ? './shopping-filled_icon.png' : './purple-shopping_icon.png'}
                            alt="add to cart"
                            onClick={() => setShopped(!shopped)}
                            className="h-7 w-7 sm:h-8 sm:w-8 hover:bg-slate-400 rounded-md "
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
