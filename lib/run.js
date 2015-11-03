export default function($rootScope) {
    'ngInject';

    $rootScope.$on('$locationChangeSuccess', function() {
        console.info('prototype running');
    });
}
