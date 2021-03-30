// Id of target Dom
var parentId = 'longLIne';
lineSplitter(parentId);

function lineSplitter(parentElmId) {
	var lineElm = document.getElementById(parentElmId);
   
	// Put the text In MultiLines
	var lines = splitTextInLine(parentElmId);
	
	/*
	  // Final Result
	  * Wrapping span between the line
	*/ 
	lineElm.innerHTML = lines.map(function (line) {		
        return '<span>' + line + '</span>'
    }).join(' ');
}


function putWordInspan(parentElmId) {
    var p = document.getElementById(parentElmId);
	p.innerHTML = p.innerText.split(/\s/).map(function (word) {
        return '<span>' + word + '</span>'
    }).join(' ');
}


//getLines();
function splitTextInLine(parentElmId) {
	// first put all word into span so that it's make easy to get width of each word
	putWordInspan(parentElmId);


    var lines = [];
    var line;
    var p = document.getElementById(parentElmId);
    var words = p.getElementsByTagName('span');
	
    var lastTop;
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
		// checking offset for splitting
		if (word.offsetTop != lastTop) {
            lastTop = word.offsetTop;
            line = [];
            lines.push(line);
        }
        line.push(word);
    }
	
	// get text from span
	var splitLines = lines.map(function (lineElm) {
		return lineElm.map(function (span) {
            return span.innerText;
        }).join(' ');
    });
    return splitLines;
}
