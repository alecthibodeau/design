/* Constants */
import text from '../constants/text.ts';

/* Helpers */
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/header.css';

function Header(): React.JSX.Element {
  const {
    textCategoryPhotoshopping,
    textCategoryBranding,
    textCategoryPackaging
  } = text;

  const { formatTitleCase } = formatText;

  const urlCentralSite: string = 'https://www.linkedin.com/in/alecthibodeau';

  const categories: string[] = [
    textCategoryPhotoshopping,
    textCategoryBranding,
    textCategoryPackaging
  ];

  function renderAnchor(category: string): JSX.Element {
    const categoryTitlecase: string = formatTitleCase(category);
    return (
      <a
        key={`anchor${categoryTitlecase}`}
        className="nav-anchor"
        href={`#section${categoryTitlecase}`}
      >
        {categoryTitlecase}
      </a>
    );
  }

  return (
    <header>
      <h1>Graphic Design</h1>
      <h2><a href={urlCentralSite}>Alec Thibodeau</a></h2>
      <nav>{categories.map(renderAnchor)}</nav>
    </header>
  );
}

export default Header;
