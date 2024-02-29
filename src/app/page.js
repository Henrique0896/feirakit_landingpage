import { BuyProduct } from './components/buyProduct';
import { Hero } from './components/hero';
import { Register } from './components/register';
import { SectionSeparator } from './components/smallComponents/sectionSeparator';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div id="HowToUse" className="py-2">
        <SectionSeparator title={'Cadastro de usuário'} />
        <Register />
        <SectionSeparator title={'Usando o app'} />
        <BuyProduct />
      </div>
    </main>
  );
}
