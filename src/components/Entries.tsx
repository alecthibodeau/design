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
        className="entry"
      >
        <img
          className={`entry-image${entry.hasImageBorder ? ' has-image-border' : ''}`}
          alt={`graphic design ${formatTitleCase(category)} sample #${entryIndex + 1}`}
          src={entry.image}
        />
        <div className="entry-captions">
          <div>{entry.captionOne}</div>
          <div>{'Skills: ' + entry.captionTwo}</div>
        </div>
      </div>
    );
  }

  function renderSection(section: Section, sectionIndex: number): JSX.Element {
    const category: string = section.category;
    return (
      <section
        key={`section${formatTitleCase(category)}${sectionIndex}`}
        id={category}
        className={`entry-section ${category}`}
      >
        <h3>
          <div>
            {formatTitleCase(category)}
          </div>
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
    <div className="entries">
      {sections.map(renderSection)}
    </div>
  );
}

export default Entries;
