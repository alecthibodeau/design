/* Styles */
import '../styles/header.css';

function Header(): React.JSX.Element {
  const urlCentralSite: string = 'https://www.linkedin.com/in/alecthibodeau';

  return (
    <header>
      <h1>Design</h1>
      <h2>
        <a
          className="name-link"
          href={urlCentralSite}
          target="_blank"
          rel="noreferrer"
        >
          Alec Thibodeau
        </a>
      </h2>
    </header>
  );
}

export default Header;
