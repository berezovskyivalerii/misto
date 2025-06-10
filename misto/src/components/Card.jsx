import React from 'react';

export default function Card({ image, title }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover select-none pointer-events-none"
      />
      {title && <p className="p-2 text-sm">{title}</p>}
    </div>
  );
}