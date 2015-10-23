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
				name: faker.name.findName(),
				imagem: faker.image.imageUrl(200, 200),
				shortDescription: faker.lorem.sentence(),
				longDescription: faker.lorem.paragraph(),
				price: parseFloat((Math.random() * 100).toFixed(2)),
        date: new Date()
			}
		})
	}
};
