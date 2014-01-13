describe('Create a Class Diagram', function(){
  var diagram;
  beforeEach(function(){
    setFixtures('<div id="Diagram_Getter" />');
    draw_div("ClassName");
    set_class_name("ClassName");
  });
  it("The page should have a div id 'Diagram_Getter'", function(){
    expect($('#Diagram_Getter')).toExist();
  });

  it("When the class is setted the page should have a div class's name", function() {
    expect($("#ClassName")).toExist();
    expect($('#Diagram_Getter')).toContain($("#ClassName"));
  });

  it("Add the name for the class", function() {
    expect($("#title")).toExist();
    expect($("#ClassName")).toContain($("#title"));
    expect("ClassName").toBe($("#title").text());    
  });
});
