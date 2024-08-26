# Split Text Into Multiline : javascript
## set a background-color for the width of text, not the width of the entire element.
## wrap each line of text with an element or span
To split a text into multiline based on width

Step to Follow:
on the script line 2: just change the ElementId
`var parentId = 'longLIne';`



Example: https://codepen.io/mohsin86/pen/gOgLbdR

Note:  element Width Required

## Another Way added on main.js
There is another way which split text by calculating height
Wrap each line into span or split each line into multiline with an element.
With this one's can set a background-color for the width of text, not the width of the entire element.
Example: https://codepen.io/mohsin86/full/abgKNwa

### Explanation:
* Splitting the Text: The script first splits the text into words and clears the container.
* Temporary Span: A temporary span (tempSpan) is created to calculate the height of the text as words are added.
* Check for Line Break: The script checks if adding a word causes the line height to increase. If so, it means a new line has started.
* Wrap in Span: The current line is then wrapped in a span element and added back to the container.
* Final Line: After processing all words, the last line is also wrapped in a span.
