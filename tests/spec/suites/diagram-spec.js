describe('Create a Class Diagram', function(){
  beforeEach(function(){
    setFixtures('<div id="Diagram_Getter" />');
    draw_div("ClassName");
    set_class_name("ClassName");
    insert_attrs("ClassName");
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
    expect($("#ClassName")).toContain($("#ClassNameattrs"));
  })

  it("The Class borders should be greater than attr div", function(){
    expect($(".class_element").width()).toEqual($(".class_attrs").width());
    expect($(".class_element").height()).toBeGreaterThan($(".class_attrs").height());
  });

});
