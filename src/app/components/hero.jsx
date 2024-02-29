import Image from 'next/image';
import logo from '../../../public/assets/logo.png';
import Link from 'next/link';
import { Letters } from './smallComponents/letters';

export function Hero() {
  const links = [
    {
      key: 0,
      description: 'Como Usar',
      href: '#HowToUse'
    },
    {
      key: 1,
      description: 'sobre o projeto',
      href: '#HowToUse'
    },
    {
      key: 2,
      description: 'Conheça o F.S.V.J.',
      href: 'https://www.fundo.social/'
    },
    {
      key: 3,
      description: 'Teste o software',
      href: 'https://expo.dev/accounts/feirakitapp/projects/feirakit-app/builds/6cfc8d71-d97e-4b97-a135-a22a86065726'
    }
  ];
  return (
    <section className="h-[38rem]  bg-blue-300 bg-hero-pattern  bg-center bg-cover  bg-no-repeat bg-blend-multiply animate-slidein [--slidein-delay:300ms] opacity-0">
      <div className="flex flex-col px-16 py-12 bg-gradient-to-b from-white/25 to-blue-900/50 bg-opacity-25  h-full">
        <nav className="flex flex-row  text-white w-full justify-between px-2 h-16 items-center">
          <div className=" border-2 border-r-0 border-b-0">
            <Image
              src={logo}
              alt="logo feira kit"
              className="w-[90px] sm:w-[90px] lg:w-52 md:lg:w-52"
            />
          </div>
          <div className="flex flex-row gap-6 h-full ">
            {links.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="flex  visited:text-white capitalize  
              items-center text-2xl hover:bg-blue-100 hover:bg-opacity-50
             hover:text-blue-900 transition-all duration-200 px-2"
                target={item.href.includes('http') ? '_blank' : ''}
              >
                {item.description}
              </Link>
            ))}
          </div>
        </nav>

        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col self-end h-full gap-6  justify-center animate-slidein [--slidein-delay:500ms] opacity-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl text-white font-bold text-pretty border-r-8 rounded-r-md leading-tight">
              O que é o Feira-kit e como usá-lo?
            </h1>
            <p className="text-xl  text-white leading-relaxed text-balance">
              O Feira Kit é seu companheiro perfeito para descobrir e explorar a
              agricultura local. Encontre produtos frescos, apoie produtores
              locais e desfrute de uma experiência de compra incrível e única.
            </p>
          </div>
          <div className="animate-slidein [--slidein-delay:700ms] opacity-0">
            <h2 className="text-4xl text-white font-bold text-pretty rounded-r-md leading-tight">
              Porque Usar O feirakit?
            </h2>
            <Letters />
          </div>
        </div>
      </div>
    </section>
  );
}
