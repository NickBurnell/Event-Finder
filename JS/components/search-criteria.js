"use strict";

const searchCriteria = {
    template: `
    
    `,
    controller: ["EventsService", function(EventsService) {
        const vm = this;
    }]
}

angular
    .module('EventApp')
    .component("searchCriteria", searchCriteria);