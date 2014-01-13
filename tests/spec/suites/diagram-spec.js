describe('Create a Class Diagram', function(){
  var diagram;
  beforeEach(function(){
    setFixtures('<div id="Diagram_Getter" />');
    drawDiv("ClassName");
    setClassName("ClassName");
    attrsDiv("ClassName");
    this.diagram = new ClassDiagram();
    this.diagram.draw_class("OtherClass");
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

  it("When the class have attributes it have a div for add them", function (){
    expect($("#ClassNameattrs")).toExist();
    expect($("#ClassName")).toContain($("#ClassNameAttrs"));
  })

  it("The Class borders should be greater than attr div", function(){
    expect($(".classElement").width()).toEqual($(".classAttrs").width());
    expect($(".classElement").height()).toBeGreaterThan($(".classAttrs").height());
  });

  it("Check title for ClassDiagram draw_class", function() {
    expect($("#OtherClass #title")).toExist();
    expect("OtherClass").toBe($("#OtherClass #title").text());
  });

  it("Add attributes in the diagram", function(){
  });

});
