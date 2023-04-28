import React from 'react';
import Create from '../../assets/img/create.avif';
import { NavLink } from 'react-router-dom';

export const About = () => {
  return (
    <section className="container_about">
      <img className="create" sizes="100vw" src={Create} alt="create" />
      <div className="container">
        <h2>Grow your home!</h2>
        <p>
          Surrounded by plants and working in greenery, we are deeply involved with nature. Our
          small company is based on what nature has to offer and what enables us to grow. We think
          it is important to make the world a greener place* and that is why HOUSEPLANTS is the
          right place for everyone.
        </p>
        <p>
          It is, in any case, the place where every plant lover feels at home. In our online shop,
          we sell rare plants, large houseplants and cute teeny tiny baby plants. But we focus not
          only on plants but also all the products you need to take care of your plants and to make
          sure they look stylish in your interior. Plants make your house feel like home and
          contribute to a feeling of peace, security and warmth.
        </p>
        <p>
          So what are you waiting for? Let us help you <strong>grow your home</strong>!
        </p>
        <p>
          *We know the importance of making the planet greener and more sustainable and that&apos;s
          why we constantly look at ways of improving our business to make a positive societal
          change. To see what we are doing so far, check out our{' '}
          <NavLink to="/recycle">Recycle page</NavLink>.
        </p>
      </div>
    </section>
  );
};
