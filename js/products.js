(function() {
	var app = angular.module("store-products", []);
	app.directive("product", function() {
		return {
			restrict: "E",
			templateUrl: "../html/product.html"
		};
	});

	app.directive("productPanels", function() {
		return {
			restrict: "E",
			templateUrl: "../html/product-panels.html",
			controller: function() {
				this.tab = 1;
				this.selectTab = function(setTabNum) {
					this.tab = setTabNum;
				};
				this.isSelected = function(checkTabNum) {
					return this.tab === checkTabNum;
				};
			},
			controllerAs: "panel"
		};
	});
})();