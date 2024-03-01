import { SectionStepText } from './sectionStepText';
import { SectionStepImages } from './sectionStepImages';
import editarUsuario from '../../../public/assets/editarUsuario.jpg';
import editarUsuario2 from '../../../public/assets/editarUsuario2.jpg';

export function EditUser() {
  return (
    <section
      className="flex flex-col  md:gap-24 px-12 md:px-24 py-2 md:py-4 lg:flex-row md:flex-row sm:flex-col  
     bg-blue-50 justify-center items-center w-full animate-slidein [--slidein-delay:800ms] opacity-0"
    >
      <SectionStepImages image1={editarUsuario} image2={editarUsuario2} />
      <SectionStepText
        title="Como editar os dados do usuario:"
        p1="Ao clicar em “editar”, na tela “Minha Conta”, o Usuário conseguirá editar os dados ( Nome Completo, e-mail, Número do telefone Celular) e o Endereço (CEP, Estado, Cidade, Bairro, Rua, Complemento e Número) da sua conta, após alterar, o Usuário deve confirmar as alterações de sua conta, clicando no botão “Confirmar Alterações” no final da tela. Caso o Usuário deseje mudar a senha de sua conta, deve clicar no botão “Alterar a Senha” também disponível no final da tela. Após finalizar todas as suas alterações, ou se caso ele tiver desistido de editá-las, para o usuário sair da tela “Editar Dados” basta ele ir na opção “Cancelar” que fica ao lado esquerdo de “Editar Dados” no topo da tela."
        p2="Ao lado esta a tela de confirmação, onde o usuário confirma que deseja realmente alterar seus dados."
      />
    </section>
  );
}
