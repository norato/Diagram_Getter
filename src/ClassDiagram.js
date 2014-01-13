function ClassDiagram (className) {
  this.name = className;
}

function drawDiv(className) {
  div = $("#Diagram_Getter");
  div.append("<div class='classElement' id='"+className+"'></div>");
};

function setClassName(className) {
  classDiv = $("#"+className+"");
  classDiv.append("<div id='title'>"+className+"</div>");
};

function attrsDiv(className) {
  classDiv = $("#"+className+"");
  classDiv.append("<div class='classAttrs' id='"+className+"Attrs'></div>");
};

ClassDiagram.prototype.draw_class = function(className) {
  drawDiv(className);
  setClassName(className);
  insertAttrs(className);
};