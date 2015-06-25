module.exports = function() {
	var faker = require('faker');
	var _ = require('lodash');

	return {
		users: _.times(2, function(n) {
			return {
				id: parseInt(_.uniqueId(), 10),
				name: faker.name.findName(),
				email: faker.internet.email()
			}
		}),
		banners: _.times(3, function(n) {
			return {
				id: n,
				imagem: faker.image.imageUrl(980, 300)
			}
		}),
		products: _.times(6, function(n) {
			return {
				id: n,
				imagem: faker.image.imageUrl(200, 200),
				description: faker.lorem.sentence(),
				price: Math.floor(Math.random() * 1000)
			}
		})
	}
}
