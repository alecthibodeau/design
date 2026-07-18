/* Styles */
import '../styles/footer.css';

function Footer(): React.JSX.Element {
  return (
    <footer>
      Alec Thibodeau, {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
