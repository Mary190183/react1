import Create from '../assets/img/IMG_0458.jpeg';

export const Loading = () => (
  <section className="super-wrapper" data-testid="loading">
    <div className="loading-wrapper">
      <div className="loading">Loading...</div>
      <img className="cat" src={Create} alt="cat" />
    </div>
  </section>
);
