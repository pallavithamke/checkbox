/**
 * Created by ADMIN on 03-03-2017.
 */

var myapp= angular.module('myapp', ["ui.router",'ngMaterial','ngMessages'])
myapp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/material');
    $stateProvider
        .state('material', {
            url: '/material',
            templateUrl: 'material.html',
            controller: 'AppCtrl'
        })
}]);
myapp.controller('AppCtrl', function($scope) {
    debugger;
    $scope.items = [1,2,3,4,5];
    $scope.selected = [1];
    $scope.toggle = function (item, list) {
        
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        }
        else {
            list.push(item);
        }
    };

    $scope.exists = function (item, list) {

        return list.indexOf(item) > -1;
    };

    $scope.isIndeterminate = function() {

        return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.items.length);
    };

    $scope.isChecked = function() {

        return $scope.selected.length === $scope.items.length;
    };

    $scope.toggleAll = function() {

        if ($scope.selected.length === $scope.items.length) {
            $scope.selected = [];
        } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
            $scope.selected = $scope.items.slice(0);
        }
    };
});