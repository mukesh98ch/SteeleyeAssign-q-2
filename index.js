
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    const plainTextPositionsMap = plainTextPositions.reduce((map, position) => {
      const word = plainText.slice(position.start, position.end);
      map[word] = position.start;
      return map;
    }, {});
  
    const highlightedHTMLContent = htmlContent.replace(/\b((?:[\w\-\_]+))\b/g, (match, word) => {
      const position = plainTextPositionsMap[word];
      if (position !== undefined) {
        return `<mark>${match}</mark>`;
      } else {
        return match;
      }
    });
  
    return highlightedHTMLContent;
  }
  