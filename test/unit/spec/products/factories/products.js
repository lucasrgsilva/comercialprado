describe('Products Factory Model', function () {
	var Products;

	beforeEach(module('comercialprado'));

	it('should return a new products model', function (Products) {
		var products = new Products();

		expect(products.getProducts()).toBe([]);
	});
});
