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

  return (
    <header>
      <h1>Graphic Design</h1>
      <h2>
        <a href="https://www.linkedin.com/in/alecthibodeau">Alec Thibodeau</a>
      </h2>
      <nav>
        <a href={`#section${textCategoryPhotoshopping}`}>
          {formatTitleCase(textCategoryPhotoshopping)}
        </a>
        <a href={`#section${textCategoryBranding}`}>
          {formatTitleCase(textCategoryBranding)}
        </a>
        <a href={`#section${textCategoryPackaging}`}>
          {formatTitleCase(textCategoryPackaging)}
        </a>
      </nav>
    </header>
  );
}

export default Header;
