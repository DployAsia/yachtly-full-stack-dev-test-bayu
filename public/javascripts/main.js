(function() {
    'use strict';
    angular
        .module('Yachtly', [])
        .factory("ApiService", ApiService)
        .controller('HomeController', HomeController)
        .controller('UserListController', UserListController)
        .controller('AddUserController', AddUserController)
        .controller('EditUserController', EditUserController);

    function ApiService($http) {
        return {
            getAllUsers: function() {
                return $http.get("/api/user").then(function(response) {
                    return response.data;
                });
            },
            getUser: function(uid) {
                return $http.get("/api/user/" + uid).then(function(response) {
                    return response.data;
                });
            },
            addUser: function(user) {
                return $http.post("/api/user/add", user).then(function(response) {
                    return response.data;
                });
            },
            editUser: function(data) {
                return $http.put("/api/user/edit/" + data.userID, data).then(function(response) {
                    return response.data;
                });
            },
            delUser: function(uid) {
                return $http.delete("/api/user/" + uid).then(function(response) {
                    return response.data;
                });
            }
        }
    }

    function HomeController($scope, $window) {
        $scope.openUserList = function() {
            $window.location.href = '/users';
        }

        $scope.openAddUser = function() {
            $window.location.href = '/user/add';
        }
    }

    function UserListController($scope, $window, ApiService) {
        ApiService.getAllUsers().then(function(data) {
            $scope.users = data;
        })

        $scope.back = function() {
            $window.location.href = '/';
        }

        $scope.addUser = function() {
            $window.location.href = '/user/add';
        }

        $scope.editUser = function(uid) {
            $window.location.href = '/user/edit/' + uid;
        }

        $scope.delUser = function(uid) {
            ApiService.delUser(uid).then(function() {
                $window.location.reload();
            })
        }

    }

    function AddUserController($scope, $window, ApiService) {
        $scope.user = {};

        $scope.submit = function() {
            ApiService.addUser($scope.user).then(function(res) {
                $window.location.href = '/users';
            })
        }
    }

    function EditUserController($scope, $window, ApiService) {
        $scope.init = function(d) {
            ApiService.getUser(d).then(function(res) {
                $scope.user = res;
                $scope.user.phoneNumber = parseInt(res.phoneNumber);
            })
        }

        $scope.submit = function(data) {
            ApiService.editUser(data).then(function(res) {
                $window.location.href = '/users';
            })
        }
    }
})();