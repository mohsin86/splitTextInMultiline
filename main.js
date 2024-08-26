wrapLinesWithSpan(document.getElementById('longText'));

/*
** Add padding and border later. since text
split based on height.
*/
const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
// Usage:
  addCSS("#text span{padding: 2px 5px} #text span:first-child{border-top: 2px solid #DB0008;}"); 
    
function wrapLinesWithSpan(container) {
    const words = container.innerHTML.split(' ');  // Split the content into words
  container.innerHTML = '';  // Clear the container's content

  let tempSpan = document.createElement('span');  // Temporary span to calculate lines
  tempSpan.classList.add('temp');
  container.appendChild(tempSpan);

  let currentLine = '';  // To store the current line's content
  let previousHeight = container.offsetHeight;
  let line = 1; 
  words.forEach((word, index) => {
    tempSpan.innerHTML = currentLine + (currentLine ? ' ' : '') + word;
    if (tempSpan.offsetHeight > previousHeight) {
      // If the tempSpan line height increases, we've wrapped to a new line 
      currentHeight = container.offsetHeight;  
      
      const span = document.createElement('span');
      span.innerHTML = currentLine.trim();
      span.classList.add('line'+line);
      container.appendChild(span);
      //container.appendChild(document.createElement('br'));  // Optional: add <br> for readability
      currentLine = word;  // Start new line
      tempSpan.innerHTML = word;  // Reset tempSpan with the current word
      line++; 
    } else {
      // If not wrapped, keep adding words to the current line
      currentLine = tempSpan.innerHTML;
    }

    // If this is the last word, add it to the container
    if (index === words.length - 1) {
      const span = document.createElement('span');
      span.classList.add('line'+line);
      span.innerHTML = currentLine.trim();
      container.appendChild(span);
    }
  });

  tempSpan.remove();  // Clean up temporary span
}
