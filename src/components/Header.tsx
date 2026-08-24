/* Styles */
import '../styles/header.css';

function Header(): React.JSX.Element {
  const urlCentralSite: string = 'https://alect.me';

  return (
    <header>
      <h1>Design</h1>
      <h2>
        <a
          className="name-link"
          href={urlCentralSite}
        >
          Alec Thibodeau
        </a>
      </h2>
    </header>
  );
}

export default Header;
