/* Interfaces */
import Section from '../interfaces/Section.ts';

/* Constants */
import sections from '../constants/sections.ts';

/* Helpers */
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/nav.css';

function Nav(): React.JSX.Element {
  const { formatTitleCase } = formatText;

  function renderAnchor(section: Section): JSX.Element {
    const categoryTitlecase: string = formatTitleCase(section.category);
    return (
      <a
        key={`anchor${categoryTitlecase}`}
        href={`#${section.category}`}
      >
        {categoryTitlecase}
      </a>
    );
  }

  return (
    <nav>{sections.map(renderAnchor)}</nav>
  );
}

export default Nav;
