"use strict";

const searchCriteria = {
    template: `
    <h2 class="viewHeader">Find your Events Here!</h2>
    <form ng-submit="$ctrl.sendRequest($ctrl.keyword, $ctrl.city, $ctrl.state);">
        <div class="searchWrapper">
            <input type="text" ng-model="$ctrl.keyword" placeholder="Enter A Keyword">
            <input type="text" ng-model="$ctrl.city" placeholder="City">
            <input type="text" ng-model="$ctrl.state" placeholder="State">
            <button class="searchButton">
                <i class="material-icons">search</i>
            </button>
        </div>
        
    </form>
    `,
    controller: ["EventRequest", function(EventRequest) {
        const vm = this;
        
        vm.result = EventRequest.returnResults();
        console.log(vm.result);

        vm.sendRequest = (keyword, city, state,) => {
            EventRequest.getEventsRequest(keyword, city, state).then((data) => {
                vm.result = data;
                console.log(data);
            });
            console.log(vm.result);
        }
    }]
};
console.log("search component connected");

angular
    .module("EventApp")
    .component("searchCriteria", searchCriteria);