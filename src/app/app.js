var app = angular.module('app', [
    'ngMessages',
    'ngRoute',

    'database',
    'container',
    'item',
    'record'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/containerPage.html'
        })
})

app.controller('appCtrl', [
    '$rootScope',
    function($rootScope) {
        $rootScope.totalContainers  = 0;
        $rootScope.containers       = [];
        $rootScope.itemOpts         = [];
    }
]);




// ----------------------------------  NOTES  ----------------------------------
// -----------------------------------------------------------------------------

// --- NEXT STEPS ---
// ------------------
// 1) Form to fill out when adding a record
// 2) A way to save items with recorded data and a place to view them
// 3) Maybe add a way for user to create new forms that can be filled out as records?
// 4) Start building automation page
// 5) Style


// --- STRUCTURE ---
// -----------------
// - Add Item Svc: Holds item opts and handles new item logic. Use controller to get item from svc and copy a new instance into a container
// - Put all services at app level so any controller can use them?
// - Need a better way to structure files and modals
// - Seperate Modules: App ✓, Database ✓, Container ✓, Item ✓, Record ✓                                                                        ✓