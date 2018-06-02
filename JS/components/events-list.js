"use strict";

const eventsList = {
    template: `
    
    `,
    controller: ["EventsService", function(EventsService) {
        const vm = this;
    }]
}

angular
    .module('EventApp')
    .component("eventsList", eventsList);