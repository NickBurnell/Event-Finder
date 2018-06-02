"use strict";

function EventsService($http, $location) {

    const getEventsRequest = () => {
        return $http({
            method: 'GET',
            url: ``,
        }).then((response) => {
            finalData = response;
            return finalData;
        }, (error) => {
            console.log(error);

        });
    }


    return {
        getEventsRequest
    }
}

angular
    .module("EventApp")
    .factory("EventsService", ["$http", EventsService]);