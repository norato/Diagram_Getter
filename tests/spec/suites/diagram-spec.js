describe('Create a Class Diagram', function(){
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
    expect("public attr1: int").toBe($("#attr1").text());
    expect("private attr2: String").toBe($("#attr2").text());
    expect("protected attr3: Boolean").toBe($("#attr3").text());
  });

  it("Add method in the diagram", function(){
    var method1 = ["public", "method1", 'int'];
    this.diagram.addMethod(method1);
    expect($(".classMethods")).toContain($(".method"));
    expect($(".classMethods")).toContain($("#method1"));
    expect("public method1(): int").toBe($("#method1").text());
  });

  it("Adding more methods", function(){
    var method1 = ["public", "method1", 'int'];
    var method2 = ["public", "method2", 'int'];
    this.diagram.addMethod(method1);
    this.diagram.addMethod(method2);
    expect("public method1(): int").toBe($("#method1").text());
    expect("public method2(): int").toBe($("#method2").text());
  });
});
