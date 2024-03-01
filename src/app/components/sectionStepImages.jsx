'use client';
import Image from 'next/image';

export function SectionStepImages(props) {
  return (
    <div className="flex w-full lg:w-1/2 md:w-1/2 justify-center ">
      <Image
        src={props.image1}
        alt="print do aplicativo"
        className="lg:h-[32vw] lg:w-[32vw] object-contain md:w-[46vw] md:h-[46vw] 
           sm:w-[70vw] sm:h-[70vw]"
      />
      <Image
        src={props.image2}
        alt="print do aplicativo"
        className="lg:h-[32vw] lg:w-[32vw] object-contain md:w-[46vw] md:h-[46vw] 
           sm:w-[70vw] sm:h-[70vw]"
      />
    </div>
  );
}
