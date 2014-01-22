$(document).ready(function(){

  var diagram = new ClassDiagram("ClassTest");
  diagram.drawClass();
  diagram.addAttr(["public", "attr1", "int"]);
  diagram.addMethod(["public", "method", "int"]);


  var diagram_outra = new ClassDiagram("ClassOutra");
  diagram_outra.drawClass();
  diagram_outra.addAttr(["public", "attr1", "int"]);
  diagram_outra.addMethod(["public", "method", "int"]);


  diagram.associateWith(diagram_outra);

  var diagram_test = new ClassDiagram("OtherClass");
  diagram_test.drawClass();
  diagram_test.addAttr(["public", "attr1", "int"]);
  diagram_test.addMethod(["public", "method", "int"]);
  
  diagram_outra.associateWith(diagram_test);
});