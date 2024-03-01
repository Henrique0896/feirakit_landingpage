'use client';
import home from '../../../public/assets/home.jpg';
import comprarProduto from '../../../public/assets/comprarProduto.jpg';
import { SectionStepText } from './sectionStepText';
import { SectionStepImages } from './sectionStepImages';

export function BuyProduct() {
  return (
    <section
      className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-4 lg:flex-row md:flex-row sm:flex-col  
      bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
    >
      <SectionStepText
        title="Como comprar um produto"
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
      <SectionStepImages image1={home} image2={comprarProduto} />
    </section>
  );
}
