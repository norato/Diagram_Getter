describe('Criação de Diagrama de Classes', function(){
  var diagram;
  beforeEach(function(){
    setFixtures('<div id="Diagram_Getter" />');
    this.div = $('#Diagram_Getter');
  });
  it("Verifica se possui a div com id 'Diagram_Getter'", function(){
    expect(this.div).toEqual($('#Diagram_Getter'));
  });
});
