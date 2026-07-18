/* Interfaces */
import GraphicDesignEntry from '../interfaces/GraphicDesignEntry';

/* Constants */
import graphicDesignEntries from '../constants/graphic-design-entries';
import text from '../constants/text.ts';

/* Helpers */
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/graphic-design.css';


function GraphicDesign(): JSX.Element {
  const {
    textCategoryPhotoshopping,
    textCategoryBranding,
    textCategoryPackaging
  } = text;

  const { formatTitleCase } = formatText;

  function renderImage(entry: GraphicDesignEntry, index: number): JSX.Element {
    return (
      <div key={`graphicDesign${index + 1}`}>
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
    <div className="graphic-design">
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
      <div className="graphic-design-entries">
        <section id={`#section${textCategoryPhotoshopping}`} className="entry-section">
          <h3>{formatTitleCase(textCategoryPhotoshopping)}</h3>
          {graphicDesignEntries.entriesPhotoshopping.map(renderImage)}
        </section>
        <section id={`#section${textCategoryBranding}`} className="entry-section">
          <h3>{formatTitleCase(textCategoryBranding)}</h3>
          {graphicDesignEntries.entriesBranding.map(renderImage)}
        </section>
        <section id={`#section${textCategoryPackaging}`} className="entry-section">
          <h3>{formatTitleCase(textCategoryPackaging)}</h3>
          {graphicDesignEntries.entriesPackaging.map(renderImage)}
        </section>
      </div>
    </div>
  );
}

export default GraphicDesign;
