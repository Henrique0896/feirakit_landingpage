'use client';
import Image from 'next/image';

export function SectionStepImages(props) {
  return (
    <div className="flex w-full lg:w-1/2 md:w-1/2 gap-10 justify-center">
      <Image
        src={props.image1}
        alt="print do aplicativo"
        className="w-1/2 md:w-[46vw] md:h-[46vw] lg:h-[32vw] lg:w-[32vw] md:object-contain "
      />
      {props.image2 && (
        <Image
          src={props.image2}
          alt="print do aplicativo"
          className="w-1/2 md:w-[46vw] md:h-[46vw] lg:h-[32vw] lg:w-[32vw] md:object-contain "
        />
      )}
    </div>
  );
}
