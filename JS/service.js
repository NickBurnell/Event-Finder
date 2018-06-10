"use strict";
// , $location
function EventRequest($http) {
    let finalData = {};
    let favorites = [];
    
    const getEventsRequest = (keyword, state, city) => {
        
        if(state === undefined){
            state = "";
        }

        if(city === undefined){
            city = "";
        }

        if(keyword === undefined){
            keyword = "";
        }

        return $http({
            method: 'GET',
            url: `https://app.ticketmaster.com/discovery/v2/events?apikey=e8r3GMDPAlkPXLGn7mExQtMHoEpFGG32&keyword=${keyword}&city=${city}&countryCode=US&stateCode=${state}`,
            async:true,
            dataType: "json",
            // keyword
            // state
            // city
        }).then((response) => {
            console.log(response);
            console.log(finalData);
            finalData = response;
            return finalData;
        }, (error) => {
            console.log(error);

        });
    }
    const returnResults = () => {
        console.log(finalData);
        return finalData;
    }

    return {
        getEventsRequest,
        returnResults
    }
}

angular
    .module("EventApp")
    .factory("EventRequest", EventRequest);