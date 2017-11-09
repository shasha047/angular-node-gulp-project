angular.module('nubewell', ['ngRoute']).config(config);

function config($httpProvider, $routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
//   $httpProvider.interceptors.push('AuthInterceptor');

  $routeProvider
    .when('/', {
        templateUrl: 'index.html',
        access: {
            restricted: false
          }
    })
    .otherwise({
        templateUrl: 'datapath.html',
        access: {
            restricted: false
          }
    })
    // .when('/datapath', {
    //     templateUrl: 'app/html/datapath.html',
    //     controller: 'homeCtrl',
    //     access: {
    //         restricted: false
    //       }
    // })
    // .otherwise({
    //     redirectTo: '/'
    // });
}

// function run($rootScope, $location, $window, AuthFactory) {
//     $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
//       if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
//         event.preventDefault();
//         $location.path('/');
//       }
//     });
//   }

angular.module('nubewell', ['ngRoute']).controller('homeCtrl', function ($scope, $http, $timeout) {

    var datapath;
    var checked;

    $http.get('datapath.json').then(function (response) {
        console.log(response.data.data);

        $scope.datapath=response.data.data;
        datapath=$scope.datapath;
    });

    // $scope.checkboxes=[];

    // $scope.alert = function(index, event){
        
    //       alert("checkbox " + index + " is " + $scope.checkbox[index]);
        
    //     }
    $scope.checked = function(index){
        console.log("checked index",$scope.datapath[index]);
        checked=index;

        $scope.datapath[index]['flag']===undefined?$scope.datapath[index]['flag']=true:$scope.datapath[index]['flag']=false;
        // alert($scope.datapath[index]['flag']);
        datapath=$scope.datapath;
        console.log($scope.datapath)
    };

    $scope.editpath = function(){
        console.log("editing");
        datapath.map((item,index)=>{
            console.log("flag outside ",item.flag)
            if(item.flag===true){
                alert(item.portname);
                console.log(item.portname);
            }
        })
    };



    // $scope.filterdata = function(dpath){

    //     var fport=$scope.fport;
    //     var falias=$scope.falias;
    //     var fshut=$scope.fshut;
    //     var datapath=$scope.datapath;
        
    //     console.log("fport ",fport)
    //     console.log("falias ",falias)
    //     console.log("fshut ",fshut)

        
    //     if(fport||falias||fshut){
    //         return dpath.portname == fport && dpath.aliasname == falias && dpath.shutdown == fshut;
            
    //     }
    //     else{
    //             $scope.datapath=datapath
    //             // alert("no filters");                
    //     }

        
    // };


});






















//   $routeProvider
//     .when('/', {
//       templateUrl: 'app/main/main.html',
//       access: {
//         restricted: false
//       }
//     })
//     .when('/created', {
//       templateUrl: 'angular-app/created_tasks/created.html',
//       controller: createdController,
//       controllerAs: 'vm',
//       access: {
//         restricted: false
//       }
//     })
//     .when('/assigned', {
//       templateUrl: 'angular-app/assigned_tasks/assigned.html',
//       controller: assignedController,
//       controllerAs: 'vm',
//       access: {
//         restricted: false
//       }
//     })
//     .when('/addlist', {
//       templateUrl: 'angular-app/new_list/addlist.html',
//       controller: addlistController,
//       controllerAs: 'vm',
//       access: {
//         restricted: false
//       }
//     })
//     .when('/addtask', {
//       templateUrl: 'angular-app/new_task/addtask.html',
//       controller: addtaskController,
//       controllerAs: 'vm',
//       access: {
//         restricted: false
//       }
//     })
//     .when('/register', {
//       templateUrl: 'angular-app/register/register.html',
//       controller: RegisterController,
//       controllerAs: 'vm',
//       access: {
//         restricted: false
//       }
//     })
//     // .when('/profile', {
    //   templateUrl: 'angular-app/profile/profile.html',
    //   access: {
    //     restricted: true
    //   }
    // })
    


// function run($rootScope, $location, $window, AuthFactory) {
//   $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
//     if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
//       event.preventDefault();
//       $location.path('/');
//     }
//   });
// }
