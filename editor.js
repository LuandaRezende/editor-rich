
var start = function start(){
    iframe.document.designMode= 'on';
}

var bold = function(){
  iframe.document.execCommand('bold', false, null);
}

var italic = function(){
  iframe.document.execCommand('italic', false, null);
}

var underline = function(){
  iframe.document.execCommand('underline', false, null);
}

var strikethrough = function(){
  iframe.document.execCommand('strikethrough', false, null);
}

var left = function(){
  iframe.document.execCommand('justifyleft', false, null);
}

var right = function(){
  iframe.document.execCommand('justifyright', false, null);
}

var center = function(){
  iframe.document.execCommand('justifycenter', false, null);
}

var justify = function(){
  iframe.document.execCommand('justify', false, null);
}

var cut = function(){
  iframe.document.execCommand('cut', false, null);
}

var copy = function(){
  iframe.document.execCommand('copy', false, null);
}

var listOl = function(){
  iframe.document.execCommand('insertOrderedList', false, null);
}

var listUl = function(){
  iframe.document.execCommand('insertUnorderedList', false, null);
}

var paragraph = function(){
  iframe.document.execCommand('insertParagraph', false, null);
}

function changeFonts(command, arg) {
    iframe.document.execCommand(command, false, arg);

}

function changeColor(command, arg){
    iframe.document.execCommand(command, false, arg);
}

