export default function($stateProvider) {
    'ngInject';
    return $stateProvider.state('root', {
        abstract: true,
        views: {
            '@': {
                template: require('./root.html')
            }
        }
    });
}
