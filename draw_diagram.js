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
});