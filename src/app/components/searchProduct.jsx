import buscaNome from '../../../public/assets/buscaPorNome.jpg';
import buscaRegiao from '../../../public/assets/buscaPorRegiao.jpg';
import buscaRegiao2 from '../../../public/assets/buscaPorRegiao2.jpg';
import { SectionStepText } from './sectionStepText';
import { SectionStepImages } from './sectionStepImages';

export function SearchProduct() {
  return (
    <>
      <section
        className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-4 lg:flex-row md:flex-row sm:flex-col  
     bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
      >
        <SectionStepImages image1={buscaNome} image2={buscaNome} />
        <SectionStepText
          title="Buscar produto"
          p1="Para realizar seu cadastro no Feira Kit, basta iniciar o Aplicativo, a tela de cadastro será aberta e nela o usuário vai preencher os campos de entrada com suas informações: Nome Completo, e-mail e Número de seu Telefone Celular. Após isso, o usuário vai criar uma senha para ser usada no App, e logo após, clicar em “Continuar” para ir para o próximo passo do cadastro."
          p2="Para finalizar seu cadastro no Feira Kit, o Usuário deverá fornecer suas informações de Endereço, preenchendo os campos referentes a seu CEP, Estado, Cidade, Bairro, Rua e Complemento, feito isso, o Usuário irá aceitar nossos Termos e Condições e nossa Política de Privacidade clicando em “Aceito”. Depois de concluir todos os passos de cadastro, clicando em “Cadastrar” sua conta está oficialmente criada, podendo ser acessada com seu email e senha criados anteriormente."
        />
      </section>
      <section
        className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-4 lg:flex-row md:flex-row sm:flex-col  
     bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
      >
        <SectionStepImages image1={buscaRegiao} image2={buscaRegiao2} />
        <SectionStepText
          p1="Para realizar seu cadastro no Feira Kit, basta iniciar o Aplicativo, a tela de cadastro será aberta e nela o usuário vai preencher os campos de entrada com suas informações: Nome Completo, e-mail e Número de seu Telefone Celular. Após isso, o usuário vai criar uma senha para ser usada no App, e logo após, clicar em “Continuar” para ir para o próximo passo do cadastro."
          p2="Para finalizar seu cadastro no Feira Kit, o Usuário deverá fornecer suas informações de Endereço, preenchendo os campos referentes a seu CEP, Estado, Cidade, Bairro, Rua e Complemento, feito isso, o Usuário irá aceitar nossos Termos e Condições e nossa Política de Privacidade clicando em “Aceito”. Depois de concluir todos os passos de cadastro, clicando em “Cadastrar” sua conta está oficialmente criada, podendo ser acessada com seu email e senha criados anteriormente."
        />
      </section>
    </>
  );
}
