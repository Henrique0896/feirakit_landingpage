'use client';
import Image from 'next/image';
import cadastro1 from '../../../public/assets/cadastro.jpg';
import cadastro2 from '../../../public/assets/cadastro2.jpg';
import { SectionStepText } from './sectionStep';

export function Register() {
  return (
    <section
      className="flex flex-col gap-24 px-24 py-4 lg:flex-row md:flex-row sm:flex-col  
     bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
    >
      <div className="flex w-full lg:w-1/2 md:w-1/2 justify-center ">
        <Image
          src={cadastro1}
          alt="print do aplicativo"
          className="lg:h-[32vw] lg:w-[32vw] object-contain md:w-[46vw] md:h-[46vw] 
           sm:w-[70vw] sm:h-[70vw]"
        />
        <Image
          src={cadastro2}
          alt="print do aplicativo"
          className="lg:h-[32vw] lg:w-[32vw] object-contain md:w-[46vw] md:h-[46vw] 
           sm:w-[70vw] sm:h-[70vw]"
        />
      </div>

      <SectionStepText
        title="Cadastrar usuário"
        p1="Carlio brand is one of the most reliable motor oil manufacturers,
          which is engaged in the production of high quality products with a
          history of more than decades in the industry. In order to get more
          information about other aspects and products of the Carlio brand, you
          can use the following buttons:"
        p2="Carlio brand is one of the most reliable motor oil manufacturers,
          which is engaged in the production of high quality products with a
          history of more than decades in the industry. In order to get more
          information about other aspects and products of the Carlio brand, you
          can use the following buttons:"
      />
    </section>
  );
}
