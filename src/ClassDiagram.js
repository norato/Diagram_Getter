function ClassDiagram (className) {
  this.name = className;
}

ClassDiagram.prototype.draw_class = function() {
  div = $("#Diagram_Getter");
  div.append("<div class='classElement' id='"+this.name+"'></div>");
  classDiv = $("#"+this.name+"");
  classDiv.append("<div id='title'>"+this.name+"</div>");
  classDiv.append("<div class='classAttrs' id='"+this.name+"Attrs'></div>");
};