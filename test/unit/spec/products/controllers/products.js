describe('ProductsController', function () {

	var ControllerFunction;
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

		ControllerFunction = $controller('ProductsController', {
			Products: ProductsServiceMock
		}, true);

		ControllerFunction.instance.test = 1;
		ProductsController = ControllerFunction();
	}));

	it('should behave...', function () {
		expect(ProductsController.test).toBe(1);
	});
});
