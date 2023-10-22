import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

function Card({ prop }) {
  const [editable, setEditable] = useState(false);

  return (
    <div
      className="
        flex
        justify-center
        text-3xl md:text-7xl 
        p-6 w-50 h-50 bg-slate-300 md:p-10 md:w-60 md:h-60 md:bg-green-300
        items-center
        drop-shadow-md	
        rounded-md"
    >
      <Image src={prop.image} alt="photo" fill />
    </div>
  );
}

export default Card;
