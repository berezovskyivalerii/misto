import { useState } from 'react';

export default function Card({
  image,
  hoverImage,
  title,
  description = '',
  rating = 4,
  reviews = 4,
  oldPrice,
  price = '–',
}) {
  const [liked, setLiked] = useState(false);
  const [shopped, setShop] = useState(false);

  const stars = (
    <>
      {Array.from({ length: rating }).map((_, i) => (
        <img
          key={`y-${i}`}
          src="./yellow-star_icon.png"
          alt="star"
          className="h-3 w-3 sm:h-5 sm:w-5"
        />
      ))}
      {Array.from({ length: 5 - rating }).map((_, i) => (
        <img
          key={`g-${i}`}
          src="./gray-star_icon.png"
          alt="nostar"
          className="h-[10px] w-[10px] sm:h-5 sm:w-5"
        />
      ))}
    </>
  );

  return (
    <div className="group relative inline-block">
      <div className="sm:transition-transform sm:duration-300 sm:hover:scale-105 sm:hover:shadow-lg sm:hover:absolute sm:hover:z-40
          sm:overflow-hidden">
        <div
          className="
          flex flex-col bg-white border border-[#5F5F5F]
          w-[198px] sm:w-[312px]
          
        "
        >
          {/* Like btn */}
          <img
            src={liked ? './like-filled_icon.png' : './like_icon.png'}
            alt="like"
            onClick={() => setLiked(!liked)}
            className="absolute right-3 top-3 h-7 w-7 cursor-pointer hover:bg-slate-300 rounded-md z-30"
          />

          {/* Top image(s) */}
          <div className="relative flex justify-center items-center h-[140px] sm:h-[240px] p-3 pb-0">
            <img
              src={image}
              alt={title}
              className="
              max-h-full max-w-full object-contain select-none pointer-events-none
              sm:transition-opacity sm:duration-300 sm:group-hover:opacity-0
            "
            />
            {hoverImage && (
              <img
                src={hoverImage}
                alt={title}
                className="
                absolute inset-0 m-auto max-h-full max-w-full object-contain
                opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300
              "
              />
            )}
          </div>

          {/* Text / price section */}
          <div className="p-4 sm:p-5 flex flex-col gap-1 transition-all duration-300">
            <h3 className="text-xs sm:text-base line-clamp-2 font-sans tracking-wide">
              {title}
            </h3>

            <div className="flex items-center gap-1">
              {stars}
              <div className="flex items-center ml-auto">
                <img src="./chat_icon.png" alt="chat" className="h-3 w-3 sm:h-5 sm:w-5" />
                <span className="text-[10px] sm:text-sm text-gray-500 ml-1 sm:ml-2">
                  {reviews} відгук
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                {oldPrice && (
                  <span className="text-[11px] sm:text-sm line-through text-gray-900">
                    {oldPrice}₴
                  </span>
                )}
                <span className="text-sm sm:text-lg text-red-500">{price}₴</span>
              </div>
              <button onClick={() => setShop(!shopped)} className="p-1 sm:p-2">
                <img
                  src={shopped ? './shopping-filled_icon.png' : './purple-shopping_icon.png'}
                  alt="cart"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
              </button>
            </div>

            {description && (
              <p
                className="
                mt-2 text-[12px] leading-tight text-gray-700
                max-h-0 opacity-0 overflow-hidden
                sm:group-hover:max-h-24 sm:group-hover:opacity-100
              "
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
