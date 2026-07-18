/* Interfaces */
import GraphicDesignEntry from '../interfaces/GraphicDesignEntry.ts';

/* Constants */
import graphicDesignEntries from '../constants/graphic-design-entries.ts';
import text from '../constants/text.ts';

/* Helpers */
import formatText from '../helpers/format-text.ts';

/* Styles */
import '../styles/graphic-design-entries.css';


function GraphicDesignEntries(): JSX.Element {
  const {
    textCategoryPhotoshopping,
    textCategoryBranding,
    textCategoryPackaging
  } = text;

  const { formatTitleCase } = formatText;

  function renderImage(entry: GraphicDesignEntry, index: number): JSX.Element {
    return (
      <div key={`graphicDesign${index + 1}`} className="graphic-design-entry">
        <img
          className="entry-image"
          alt={`graphic design ${entry.category} sample #${index + 1}`}
          src={entry.image}
        />
        <div className="caption-one">{entry.captionOne}</div>
        <div>{'Tools: ' + entry.captionTwo}</div>
      </div>
    );
  }

  return (
    <div className="graphic-design-entries">
      <section
        id={`#section${textCategoryPhotoshopping}`}
        className="entry-section"
      >
        <h3>{formatTitleCase(textCategoryPhotoshopping)}</h3>
        {graphicDesignEntries.entriesPhotoshopping.map(renderImage)}
      </section>
      <section
        id={`#section${textCategoryBranding}`}
        className="entry-section"
      >
        <h3>{formatTitleCase(textCategoryBranding)}</h3>
        {graphicDesignEntries.entriesBranding.map(renderImage)}
      </section>
      <section
        id={`#section${textCategoryPackaging}`}
        className="entry-section"
      >
        <h3>{formatTitleCase(textCategoryPackaging)}</h3>
        {graphicDesignEntries.entriesPackaging.map(renderImage)}
      </section>
    </div>
  );
}

export default GraphicDesignEntries;
