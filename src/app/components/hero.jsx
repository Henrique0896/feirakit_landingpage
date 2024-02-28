import Image from 'next/image';
import logo from '../../../public/assets/logo.png';

export function Hero() {
  return (
    <section>
      <Image src={logo} alt="logo feira kit" width={500} />
      <h1>Hero</h1>
    </section>
  );
}
