describe("WordCalculator Tests", function(){
	var wordCalculator;

	beforeEach(module("myApp"));

	beforeEach(inject(function($injector){
		wordCalculator = $injector.get("wordCalculator");
	}));

	it("calculate d should return $.04", function(){
		var amount = wordCalculator.calculate('d');
		expect(amount).toBe('$.04');
	});

	it('calculate z should return $.26', function(){
		var amount = wordCalculator.calculate('z');
		expect(amount).toBe('$.26');
	});
	
	it('calculate ; should return ERROR', function(){
		var amount = wordCalculator.calculate(';');
		expect(amount).toBe('ERROR');
	});

	it('dollar words are persisted', function(){ 
    var amount = wordCalculator.calculate('buzzy');
    expect(amount).toBe('$1.00');
  });

});