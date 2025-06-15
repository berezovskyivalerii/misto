import { useState } from 'react';

export default function Comment({
  author,
  date,
  rating = 0,
  text,
  likes = 0,
  dislikes = 0,
}) {
  const [likeCnt, setLike]       = useState(likes);
  const [dislikeCnt, setDislike] = useState(dislikes);

  return (
    <article
      className="
        w-full max-w-[900px]
        border border-[#5F5F5F] rounded-[20px]
        px-6 py-5
        flex flex-col gap-2
      "
    >
      {/* шапка */}
      <header className="flex justify-between">
        <h3 className="font-semibold text-sm">{author}</h3>
        <time className="text-sm text-gray-700">{date}</time>
      </header>

      {/* звёзды */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <img key={`y${i}`} src="./yellow-star_icon.png"  alt="★" className="h-7 w-7" />
        ))}
        {Array.from({ length: 5 - rating }).map((_, i) => (
          <img key={`g${i}`} src="./gray-star_icon.png" alt="☆" className="h-7 w-7" />
        ))}
      </div>

      {/* текст отзыва */}
      <p className="text-gray-800 text-[13px] max-w-[740px] leading-relaxed">{text}</p>

      {/* лайк / дизлайк */}
      <footer className="flex gap-6 self-end text-lg">
        <button
          onClick={() => setLike(likeCnt + 1)}
          className="flex items-center gap-1 hover:opacity-80"
        >
          <img src="./likeup.png" alt="like" className="h-7 w-7" />
          {likeCnt}
        </button>

        <button
          onClick={() => setDislike(dislikeCnt + 1)}
          className="flex items-center gap-1 hover:opacity-80"
        >
          <img src="./likedown.png" alt="dislike" className="h-7 w-7" />
          {dislikeCnt}
        </button>
      </footer>
    </article>
  );
}
