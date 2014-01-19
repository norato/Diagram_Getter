function ClassDiagram (className) {
  this.name = className;
}

ClassDiagram.prototype.drawClass = function() {
  div = $("#Diagram_Getter");
  div.append("<div class='classElement' id='"+this.name+"'></div>");
  classDiv = $("#"+this.name+"");
  classDiv.append("<div id='title'>"+this.name+"</div>");
  classDiv.append("<div class='classAttrs' id='"+this.name+"Attrs'></div>");
  classDiv.append("<div class='classMethods' id='"+this.name+"Methods'></div>")
};

ClassDiagram.prototype.addAttr = function(arrayAttr){
  var view = arrayAttr[0];
  var attrName = arrayAttr[1];
  var type = arrayAttr[2];
  var text = view +" " + attrName +": " + type;
  $("#"+this.name+" .classAttrs").append("<div class=attr id='"+attrName+"'>"+text+"</div>")
};

ClassDiagram.prototype.addMethod = function(arrayMethod) {
  var view = arrayMethod[0];
  var methodName = arrayMethod[1];
  var type = arrayMethod[2];
  var text = view +" " + methodName +"(): " + type;
  $("#"+this.name+" .classMethods").append("<div class=method id='"+methodName+"'>"+text+"</div>")
};

ClassDiagram.prototype.leftPosition = function() {
  classDiv = $("#"+this.name+"");
  return {
    x : classDiv.offset().left,
    y : classDiv.offset().top + (classDiv.height()/2)
  };
};

ClassDiagram.prototype.rightPosition = function() {
  classDiv = $("#"+this.name+"");
  return {
    x : classDiv.offset().left + classDiv.width(),
    y : classDiv.offset().top + (classDiv.height()/2)
  };
};