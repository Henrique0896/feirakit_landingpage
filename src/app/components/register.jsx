'use client';
import cadastro1 from '../../../public/assets/cadastro.jpg';
import cadastro2 from '../../../public/assets/cadastro2.jpg';
import { SectionStepText } from './sectionStepText';
import { SectionStepImages } from './sectionStepImages';

export function Register() {
  return (
    <section
      className="flex flex-col gap-24 px-24 py-4 lg:flex-row md:flex-row sm:flex-col  
     bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
    >
      <SectionStepImages image1={cadastro1} image2={cadastro2} />

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
