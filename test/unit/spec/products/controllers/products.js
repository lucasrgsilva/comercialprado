describe('Products Controller', function () {

	var ProductsController;

	var ProductsServiceMock = {
		getList: function () {
			return {
				then: function (resolve) {
					resolve({});
				}
			}
		}
	}

	beforeEach(module('comercialprado'));
	beforeEach(inject(function ($controller, _$rootScope_) {
		$rootScope = _$rootScope_;

		var scope = {
			test: 1
		};

		ProductsController = $controller('ProductsController', {
			$scope: scope,
			Products: ProductsServiceMock
		});
	}));

	it('should behave...', function () {
		expect(ProductsController.test).toBe(1);
	});


	// it('should return a array products', inject(function ($controller, $rootScope) {
	// var scope = {};
	// ProductsController = $controller('ProductsController', {
	// 	$scope: scope,
	// 	Products: ProductsServiceMock
	// });

	// $rootScope.$digest();

	// expect(ProductsController.products).toBe({});
	// }));
});
