(function() {
	
	var app = angular.module("lifeStoreApp", ["store-products"]);

	app.controller("StoreController", [ "$http", function($http) {
	    // this.products = lives; // left it here for reference
	    var store = this;
	    store.products = [];
	    $http.get("../data/lives.json").success(function(data) {
	    	store.products = data;
	    });
	}]);

	app.controller("MessageController", function() {
		this.message = {};
		this.addMessage = function(life) {
			life.messages.push(this.message);
			this.message = {};
		};
	});

	app.directive("message", function() {
		return {
			restrict: "E",
			templateUrl: "../html/message.html"
		};
	});

})();