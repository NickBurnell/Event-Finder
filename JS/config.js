"use strict";

angular
    .module('EventApp', [])
    .config(($routeProvider) => {
        $routeProvider
          .when("/search-criteria", {
            template: "<search-criteria></search-criteria>"
          })
          .when("/events-list", {
            template: "<events-list></events-list>"
          })
          .when("/favorites-list", {
            template: "<favorites-list></favorites-list>"
          })
          .when("/recipe-details", {
            template: "<events-details></events-details>"
          })
          .otherwise({ redirectTo : "/search-criteria" })
      });