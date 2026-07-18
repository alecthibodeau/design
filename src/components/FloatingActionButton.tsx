/* Styles */
import '../styles/floating-action-button.css';

function FloatingActionButton(): React.JSX.Element {
  function scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }

  return (
    <button
      onClick={scrollToTop}
      className="floating-action-button"
    >
      Top
    </button>
  );
}

export default FloatingActionButton;
