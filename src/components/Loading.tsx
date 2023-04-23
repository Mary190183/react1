import Create from '../assets/img/IMG_0458.jpeg';
import Image from 'next/image';

export const Loading = () => (
  <section className="super-wrapper" data-testid="loading">
    <div className="loading-wrapper">
      <div className="loading">Loading...</div>
      <Image src={Create} alt={'create'} />
    </div>
  </section>
);
