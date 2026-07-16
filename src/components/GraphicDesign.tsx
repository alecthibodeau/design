/* Constants */
import constants from '../constants';

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
      <h1>Graphic Design</h1>
      <h2>
        <a href="https://www.linkedin.com/in/alecthibodeau">Alec Thibodeau</a>
      </h2>
      <div className="graphic-design-images">
        {constants.graphicDesignEntries.map(renderImage)}
      </div>
    </div>
  );
}

export default GraphicDesign;
