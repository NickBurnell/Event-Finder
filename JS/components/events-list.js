"use strict";

const eventsList = {
    bindings: {
        result: "<"
    },
    template: `
    
    `,
    controller: ["EventRequest", function(EventRequest) {
        const vm = this;
    }]
}

angular
    .module("EventApp")
    .component("eventsList", eventsList);