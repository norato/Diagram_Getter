$(document).ready(function(){
  var class_name = "ClassTest"
  var diagram = new ClassDiagram(class_name);
  diagram.drawClass();
  var attr1 = ["public", "attr1", 'int'];
  var attr2 = ["private", "attr2", 'String'];
  var attr3 = ["protected", "attr3", 'Boolean'];
  diagram.addAttr(attr1);
  diagram.addAttr(attr2);
  diagram.addAttr(attr3);

  var method1 = ["public", "method1", 'int'];
  diagram.addMethod(method1);


  var class_outra = "ClassOutra"
  var diagram_outra = new ClassDiagram(class_outra);
  diagram_outra.drawClass();

  var attr1_ = ["public", "attr1", 'int'];
  var attr2_ = ["private", "attr2", 'String'];
  var attr3_ = ["protected", "attr3", 'Boolean'];
  diagram_outra.addAttr(attr1_);
  diagram_outra.addAttr(attr2_);
  diagram_outra.addAttr(attr3_);

  var method1_ = ["public", "method1", 'int'];
  diagram_outra.addMethod(method1_);
});