function ClassDiagram (className) {
  this.name = className;
  this.associations = 0;
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

ClassDiagram.prototype.topPosition = function() {
  classDiv = $("#"+this.name+"");
  return {
    x : classDiv.offset().left + (classDiv.width() / 2),
    y : classDiv.offset().top
  };
};

ClassDiagram.prototype.bottomPosition = function() {
  classDiv = $("#"+this.name+"");
  return {
    x : classDiv.offset().left + (classDiv.width() / 2),
    y : classDiv.offset().top + classDiv.height()
  };
};

ClassDiagram.prototype.associateWith = function(other_class) {
  var id = this.name + "Have" + other_class.name;
  var thisClassX = this.rightPosition().x
  var thisClassY = this.rightPosition().y
  var otherClassX = other_class.leftPosition().x
  var otherClassY = other_class.leftPosition().y
  
  var style = "left:"+(thisClassX + 4)+"px;";

  $("#Diagram_Getter").append("<canvas id='"+id+"'class='canvas' style='"+style+"'></canvas>");
  
  var canvas = document.getElementById(id);
  
  var context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(0,thisClassY);
  context.lineTo(70,otherClassY);
  context.lineWidth = 3;
  context.strokeStyle = "#000000";
  context.stroke();
};