/* Constants */
import graphicDesignEntries from '../constants/graphic-design-entries';

/* Interfaces */
import GraphicDesignEntry from '../interfaces/GraphicDesignEntry';

function GraphicDesign(): JSX.Element {
  function renderImage(entry: GraphicDesignEntry, index: number): JSX.Element {
    return (
      <div key={`graphicDesign${index + 1}`}>
        <img
          className="entry-image"
          alt={`graphic design sample #${index + 1}`}
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
          <a href="#sectionPhotoshopping">Photoshopping</a>
          <a href="#sectionBranding">Branding</a>
          <a href="#sectionPackaging">Packaging</a>
        </nav>
      </header>
      <div className="graphic-design-images">
        <section id="sectionPhotoshopping">
          <h3>Photoshopping</h3>
          {graphicDesignEntries.entriesPhotoshopping.map(renderImage)}
        </section>
        <section id="sectionBranding">
          <h3>Branding</h3>
          {graphicDesignEntries.entriesBranding.map(renderImage)}
        </section>
        <section id="sectionPackaging">
          <h3>Packaging</h3>
          {graphicDesignEntries.entriesPackaging.map(renderImage)}
        </section>
      </div>
    </div>
  );
}

export default GraphicDesign;
