export default function Marquee({ phrases = [], speed = 18 }) {
  if (!phrases.length) return null;

  const fillPhrases = [];
  while (fillPhrases.length < 20) fillPhrases.push(...phrases);

  return (
    <div className="flex items-center h-10 overflow-hidden bg-[--color-yellow] select-none">
      <div
        className="flex min-w-full animate-marquee whitespace-nowrap will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        {fillPhrases.map((txt, i) => (
          <span key={i} className="px-5 text-lg leading-none shrink-0">
            {txt}
          </span>
        ))}
      </div>
    </div>
  );
}