describe('Create Classes', function(){
  var diagram;
  beforeEach(function(){
    setFixtures('<div id="Diagram_Getter" />');
    this.diagram = new ClassDiagram("ClassName");
    this.diagram.drawClass();
  });

  it("The page should have a div id 'Diagram_Getter'", function(){
    expect($('#Diagram_Getter')).toExist();
  });

  it("When the class is setted the page should have a div class's name", function(){
    expect($("#ClassName")).toExist();
    expect($('#Diagram_Getter')).toContain($("#ClassName"));
  });

  it("Add the name for the class", function(){
    expect($("#title")).toExist();
    expect($("#ClassName")).toContain($("#title"));
    expect("ClassName").toBe($("#title").text());  
  });

  it("The name of classe should be at the center", function(){
    title = $("#title");
    expect(title).toHaveCss({"text-align": "center"});
  });

  it("The attributes have a div", function (){
    expect($("#ClassNameAttrs")).toExist();
    expect($("#ClassName")).toContain($("#ClassNameAttrs"));
  })

  it("The Class borders should be greater than attr div", function(){
    expect($(".classElement").width()).toEqual($(".classAttrs").width());
    expect($(".classElement").height()).toBeGreaterThan($(".classAttrs").height());
  });

  it("The methods have a div", function(){
    expect($("#ClassNameMethods")).toExist();
    expect($("#ClassName")).toContain($("#ClassNameMethods"));
  });

  it("The Class borders should be greater than methods div", function(){
    expect($(".classElement").width()).toEqual($(".classMethods").width());
    expect($(".classElement").height()).toBeGreaterThan($(".classMethods").height());
  });

  it("Add attribute in the diagram", function(){
    var attr1 = ["public", "attr1", 'int'];
    this.diagram.addAttr(attr1);
    expect($(".classAttrs")).toContain($(".attr"));
    expect($(".classAttrs")).toContain($("#attr1"));
    expect("public attr1: int").toBe($("#attr1").text());
  });

  it("Adding more attributes", function() {
    var attr1 = ["public", "attr1", 'int'];
    var attr2 = ["private", "attr2", 'String'];
    var attr3 = ["protected", "attr3", 'Boolean'];
    this.diagram.addAttr(attr1);
    this.diagram.addAttr(attr2);
    this.diagram.addAttr(attr3);
    expect("public attr1: int").toBe($("#ClassName #attr1").text());
    expect("private attr2: String").toBe($("#ClassName #attr2").text());
    expect("protected attr3: Boolean").toBe($("#ClassName #attr3").text());
  });

  it("Each class has its own attributes", function() {
    var attr1 = ["public", "attr1", 'int'];
    this.diagram.addAttr(attr1);
    expect("public attr1: int").toBe($("#ClassName #attr1").text());

    var otherClass = new ClassDiagram("OtherClass");
    otherClass.drawClass();
    var attr1_other = ["public", "attr1_other", 'int'];
    otherClass.addAttr(attr1_other);
    expect("public attr1_other: int").toBe($("#OtherClass #attr1_other").text());
    
    expect("public attr1_other: int").not.toBe($("#ClassName #attr1").text());
    expect("public attr1: int").not.toBe($("#OtherClass #attr1_other").text());
  });

  it("Add method in the diagram", function(){
    var method1 = ["public", "method1", 'int'];
    this.diagram.addMethod(method1);
    expect($(".classMethods")).toContain($(".method"));
    expect($(".classMethods")).toContain($("#ClassName #method1"));
    expect("public method1(): int").toBe($("#ClassName #method1").text());
  });

  it("Adding more methods", function(){
    var method1 = ["public", "method1", 'int'];
    var method2 = ["public", "method2", 'int'];
    this.diagram.addMethod(method1);
    this.diagram.addMethod(method2);
    expect("public method1(): int").toBe($("#ClassName #method1").text());
    expect("public method2(): int").toBe($("#ClassName #method2").text());
  });

  it("Each class has its own methods", function() {
    var method1 = ["public", "method1", 'int'];
    var method2 = ["public", "method2", 'int'];
    this.diagram.addMethod(method1);
    this.diagram.addMethod(method2);
    expect("public method1(): int").toBe($("#ClassName #method1").text());
    expect("public method2(): int").toBe($("#ClassName #method2").text());

    var otherClass = new ClassDiagram("OtherClass");
    otherClass.drawClass();
    
    var method1_other = ["public", "method1_other", 'int'];
    var method2_other = ["public", "method2_other", 'int'];
    otherClass.addMethod(method1_other);
    otherClass.addMethod(method2_other);

    expect("public method1_other(): int").toBe($("#OtherClass #method1_other").text());
    expect("public method2_other(): int").toBe($("#OtherClass #method2_other").text());

    expect("public method2_other(): int").not.toBe($("#ClassName #method2").text());
    expect("public method2(): int").not.toBe($("#OtherClass #method2_other").text());
  });
});

describe('Associate Classes', function(){
  var class1;
  var class1_div;
  var class2;
  var class2_div;

  beforeEach(function(){
    setFixtures('<div id="Diagram_Getter" />');
    this.class1 = new ClassDiagram("Class1");
    this.class1.drawClass();
    this.class1_div = $("#Class1");

    this.class2 = new ClassDiagram("Class2");
    this.class2.drawClass();
    this.class2_div = $("#Class2");
  });

  it("Calculate the left position", function(){
    var x = this.class1_div.offset().left;
    var y = this.class1_div.offset().top + (this.class1_div.height() / 2);
    expect(this.class1.leftPosition().x).toBe(x);
    expect(this.class1.leftPosition().y).toBe(y);
  });

  it("Calculate the right position", function(){
    var x = this.class1_div.offset().left + this.class1_div.width();
    var y = this.class1_div.offset().top + (this.class1_div.height() / 2);
    expect(this.class1.rightPosition().x).toBe(x);
    expect(this.class1.rightPosition().y).toBe(y);
  });

  it("Calculate the top position", function() {
    var x = this.class1_div.offset().left + (this.class1_div.width() / 2);
    var y = this.class1_div.offset().top
    expect(this.class1.topPosition().x).toBe(x);
    expect(this.class1.topPosition().y).toBe(y);
  });

  it("Calculate the bottom position", function() {
    var x = this.class1_div.offset().left + (this.class1_div.width() / 2);
    var y = this.class1_div.offset().top + this.class1_div.height();
    expect(this.class1.bottomPosition().x).toBe(x);
    expect(this.class1.bottomPosition().y).toBe(y);
  });
});