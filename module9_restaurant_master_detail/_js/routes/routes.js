(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: '_html/home.template.html'
  })

  // Categories list page
  .state('menuCategories', {
    url: '/menu-categories',
    templateUrl: '_html/AllMenuCategories.template.html',
    controller: 'MenuCategoriesController as menuCategories',
    resolve: {
      categories: ['MenuDataService',
                  function (MenuDataService) {
                    console.log("calling getAllCategories()")
                    return MenuDataService.getAllCategories()
                      .then(function (categories) {
                        console.log("promise returned")
                        return categories;
                      });
                  }]
    }
  })

  // Category Items list page
  .state('categoryItems', {
    url: '/category-item/{categoryShortName}',
    templateUrl: '_html/AllItems.template.html',
    controller: 'CategoryItemsController as categoryItems',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              console.log("calling getItemsForCategory()")
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function (items) {
                                console.log("promise returned")
                  return items;
                });
            }]
    }
  });
}

})();
