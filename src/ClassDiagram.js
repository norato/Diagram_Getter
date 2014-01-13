function ClassDiagram () {}

ClassDiagram.prototype.draw_class = function(class_name) {
  draw_div(class_name);
  set_class_name(class_name);
  insert_attrs(class_name);
};

function draw_div(class_name) {
  div = $("#Diagram_Getter");
  div.append("<div class='class_element' id='"+class_name+"'></div>");
};


function set_class_name(class_name) {
  class_div = $("#"+class_name+"");
  class_div.append("<div id='title'>"+class_name+"</div>");
};

function insert_attrs (class_name) {
  class_div = $("#"+class_name+"");
  class_div.append("<div class='class_attrs' id='"+class_name+"attrs'></div>");
};