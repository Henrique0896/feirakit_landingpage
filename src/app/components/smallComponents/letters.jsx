'use client';
import { useState } from 'react';

export function Letters() {
  const [lettersIndex, setLettersIndex] = useState(0);

  const reasonsforUse = [
    'Uma maneira conveniente de encontrar produtos frescos, de boa qualidade.',
    'Apoio à comunidade local e agricultura sustentável.',
    'Encontre feiras e produtores locais em sua área com facilidade.',
    'Divulgue seus produtos com facilidade e amplie seu negócio!'
  ];

  function changeText() {
    if (lettersIndex < reasonsforUse.length - 1) {
      setLettersIndex(lettersIndex + 1);
    } else {
      setLettersIndex(0);
    }
  }

  setTimeout(changeText, 5000);

  return (
    <>
      <p
        className="h-3 min-h-3 text-pretty text-2xl font-bold leading-relaxed
       text-amber-400 transition-opacity duration-75 antialiased "
      >
        {reasonsforUse[lettersIndex]}
      </p>
    </>
  );
}
