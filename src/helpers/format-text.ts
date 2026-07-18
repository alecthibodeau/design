function formatTitleCase(text: string): string {
  return text.toLowerCase()[0].toUpperCase() + text.slice(1);
}

const formatText = {
  formatTitleCase
};

export default formatText;
