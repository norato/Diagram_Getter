function ClassDiagram (class_name) {
  var class_name = class_name;
}

ClassDiagram.prototype.draw_class = function(class_name) {
  draw_div(class_name);
  set_class_name(class_name);
  insert_attrs(class_name);
};

function draw_div(class_name) {
  div = $("#Diagram_Getter");
  div.append("<div id='"+class_name+"'></div>");
  class_div = $("#"+class_name+"");
  class_div.css({'width':'150px', 'height':'200px','border':'2px solid black'});
};


function set_class_name(class_name) {
  class_div = $("#"+class_name+"");
  class_div.append("<div id='title'>"+class_name+"</div>");
  title = $("#title");
  title.css({'text-align':'center'})
};

function insert_attrs (class_name) {
  class_div = $("#"+class_name+"");
  class_div.append("<div id='"+class_name+"attrs'></div>");
  attr_div = $("#"+class_name+"attrs");
  attr_div.css({'width':'150px', 'height':'50px','border':'2px solid black'});
}