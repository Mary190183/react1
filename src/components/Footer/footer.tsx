import Link from 'next/link';
import Github from '../../assets/svg/github.svg';
import RSLogo from '../../assets/svg/rsschool.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li className="footer-item">
            <Link className="footer-link" href="https://github.com/Mary190183/">
              <Image src={Github} alt={'github'} />
              <p className="footer-p">Mary190183</p>
            </Link>
          </li>
          <li className="footer-item">
            <p>@2023</p>
          </li>
          <li className="footer-item">
            <Link className="footer-link" href="https://rs.school/react/">
              <Image src={RSLogo} alt={'rslogo'} />
              {/* <RSLogo /> */}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
