"use strict";

const favoritesList = {
    template: `
    
    `,
    controller: ["EventsService", function(EventsService) {
        const vm = this;
    }]
}

angular
    .module('EventApp')
    .component("favoritesList", favoritesList);