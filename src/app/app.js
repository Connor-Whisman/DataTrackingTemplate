var app = angular.module('app', [
    'ngMessages',
    'ngRoute',

    'database',
    'archive',

    'container',
    'item',
    'record'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/containerPage.html'
        })
        .when('/archive', {
            templateUrl: 'pages/archivePage.html'
        })
})

app.controller('appCtrl', [
    '$rootScope',
    function($rootScope) {
    }
]);




// ----------------------------------  NOTES  ----------------------------------
// -----------------------------------------------------------------------------

// --- NEXT STEPS ---
// ------------------
// 1) Form to fill out when adding a record                                                                                                     ✓
// 2) A way to save items with recorded data and a place to view them - Archives started                                                        ✓
// 2.5) Expand archives table row to show records
// 3) Start building automation page - Branch created
// 4) Style


// --- STRUCTURE ---
// -----------------
// - Add Item Svc: Holds item opts and handles new item logic. Use controller to get item from svc and copy a new instance into a container
// - Use Archive Svc: Code needs to run even if archive page is refreshed. Currently only works when coming from containers page
//      (Containers runs database Svc which gets all saved data. Seperate API calls to get when data is needed)
// - Put all services at app level so any controller can use them? - Started, add item opts svc
// - Need a better way to structure files and modals
// - Seperate Modules: App ✓, Database ✓, Container ✓, Item ✓, Record ✓                                                                        ✓