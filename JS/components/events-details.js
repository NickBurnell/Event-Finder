"use strict";

const eventsDetails = {
    template: `
    
    `,
    controller: ["EventsService", function(EventsService) {
        const vm = this;
    }]
}

angular
    .module('EventApp')
    .component("eventsDetails", eventsDetails);