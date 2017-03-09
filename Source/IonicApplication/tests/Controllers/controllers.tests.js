describe('Controllers', function () {
    /*var scope;
  beforeEach(module('starter.controllers'));

  //var $controller;
    

  beforeEach(inject(function($rootscope,$controller){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    
      scope = $rootscope.$new();
      $controller('DashCtrl', {$scope: scope});
  }));
    
    

  
    it('Tests barcode function of DashCtrl', function() {
      /*var $scope = {};
      var controller = $controller('DashCtrl', { $scope: $scope });*/
      /*var firstname = 'Sravani';
      var lastname = 'Punyamurthula';*/
     /* expect($scope.fullName(firstname, lastname)).toEqual('Punyamurthula Sravani');   // succeeds
      expect($scope.fullName('Tony' , 'Willams')).toEqual('Punyamurthula Sravani');    // fails
        
          
  });*/
    
    var scope;
	
	beforeEach(angular.mock.module('starter.controllers'));
	beforeEach(angular.mock.inject(function($rootScope, $controller,$http) {
		scope = $rootScope.$new();
        http = $http;
		$controller('DashCtrl', {$scope: scope,$http:http});
        
	}));

	/*it("Checks the task creation", function () {
		
        scope.getWeather();
        
      expect(scope.id).toEqual('2');    // fails
	});
    
    it("Checks the barcode", function () {
		
        scope.getWeather();
        
      expect(scope.id).toEqual('1');    // fails
	});*/
    

    
    it("Checks the barcode", function () {
		
        scope.getBarcodeDetails();
        
     var barcode='0045557350017';
			
			expect(scope.getBarcode(barcode)).toEqual('0045557350017');
	});
	
    it("Checks the type of barcode", function () {
		
        scope.getBarcodeDetails();
        
     var type='ean-13';
			
			expect(scope.getType(type)).toEqual('ean-13');
	});
	it("Checks the type of image url", function () {
		
        scope.getBarcodeDetails();
        
     var url='http://www.elpnow.org/wp-content/uploads/2013/08/sample-1d-barcode1.jpg';
			
			expect(scope.getimageUrl(url)).toEqual('http://www.elpnow.org/wp-content/uploads/2013/08/sample-1d-barcode1.jpg');
	});
    
    it("Checks the store", function () {
		
        scope.getStores();
        
     var name='walmart';
			
			expect(scope.getstore(name)).toEqual('walmart');
	});
    

});