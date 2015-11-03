export default function(RestangularProvider) {
    'ngInject';

    RestangularProvider.setDefaultHttpFields({
        timeout: 20000
    });

    RestangularProvider.setBaseUrl('http://localhost:3000/api');
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setRestangularFields({
        id: "_id"
    });
}
