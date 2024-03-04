import { BuyProduct } from './components/buyProduct';
import { Hero } from './components/hero';
import { Register } from './components/register';
import { SectionSeparator } from './components/smallComponents/sectionSeparator';
import { EditUser } from './components/editUser';
import { SearchProduct } from './components/searchProduct';
import { Menu } from './components/menu';
import { ProductSale } from './components/productSale';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div id="HowToUse" className="py-2">
        <SectionSeparator title={'Cadastro de usuário'} />
        <Register />
        <SectionSeparator title={'Compra de produto'} />
        <BuyProduct />
        <SectionSeparator title={'Pesquisa de produto'} />
        <SearchProduct />
        <SectionSeparator title={'Menu'} />
        <Menu />
        <SectionSeparator title={'Venda de produto'} />
        <ProductSale />
        <SectionSeparator title={'Edição de dados do usuário'} />
        <EditUser />
      </div>
    </main>
  );
}
