/* Interfaces */
import Entry from '../interfaces/Entry.ts';
import Section from '../interfaces/Section.ts';

/* Constants */
import sections from '../constants/sections.ts';

/* Helpers */
import formatText from '../helpers/format-text.ts';

/* Styles */
import '../styles/entries.css';

function Entries(): JSX.Element {
  const { formatTitleCase } = formatText;

  function renderEntry(
    category: string,
    entry: Entry,
    entryIndex: number
  ): JSX.Element {
    return (
      <div
        key={`graphicDesign${formatTitleCase(category)}${entryIndex}`}
        className="graphic-design-entry"
      >
        <img
          className={`entry-image${entry.isImageBorder ? ' border' : ''}`}
          alt={`graphic design ${formatTitleCase(category)} sample #${entryIndex + 1}`}
          src={entry.image}
        />
        <div className="caption-one">
          {entry.captionOne}
        </div>
        <div>
          {'Tools: ' + entry.captionTwo}
        </div>
      </div>
    );
  }

  function renderSection(section: Section, sectionIndex: number): JSX.Element {
    const category: string = section.category;
    return (
      <section
        key={`section${formatTitleCase(category)}${sectionIndex}`}
        id={`section${formatTitleCase(category)}`}
        className="entry-section"
      >
        <h3>
          {formatTitleCase(category)}
        </h3>
        {
          section.entries.map(
            (entry, entryIndex) => renderEntry(category, entry, entryIndex)
          )
        }
      </section>
    );
  }

  return (
    <div className="graphic-design-entries">
      {sections.map(renderSection)}
    </div>
  );
}

export default Entries;
