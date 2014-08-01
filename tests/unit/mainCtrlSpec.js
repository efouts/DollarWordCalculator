describe('Controller: MainCtrl', function() {

  var scope;
  var wordCalculatorMock;
  var MainCtrl;

	beforeEach(module('myApp'));

  beforeEach(function() {
    wordCalculatorMock = {

        calculate:  function (word) {
          return "";
      }
   };
  });

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
        $scope: scope, wordCalculator: wordCalculatorMock
  	});
  }));

  it('should call wordCalculator calculate method', function () {
    spyOn(wordCalculatorMock, "calculate");
    scope.word = 'buzzy';
    scope.wordChange();
    expect(wordCalculatorMock.calculate).toHaveBeenCalledWith('buzzy');
	});

  it('should maintain a list of dollar words', function() {
    wordCalculatorMock.calculate = function(word) { return '$1.00'; };
    scope.word = 'buzzy';   
    scope.wordChange(); 
    expect(scope.dollarWords).toEqual(['buzzy']);
  });

  it('should not add non-dollar words to the list of dollar words', function() {
    wordCalculatorMock.calculate = function(word) { return '$1.01'; };
    scope.word = 'buzzy';   
    scope.wordChange(); 
    expect(scope.dollarWords).toEqual([]);
  });
});