/* Constants */
import text from '../constants/text.ts';

/* Helpers */
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/nav.css';

function Nav(): React.JSX.Element {
  const {
    textCategoryPhotoshopping,
    textCategoryBranding,
    textCategoryPackaging
  } = text;

  const { formatTitleCase } = formatText;

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
    <nav>{categories.map(renderAnchor)}</nav>
  );
}

export default Nav;
