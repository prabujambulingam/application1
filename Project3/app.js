angular.module('BankApp', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/overview")

    $stateProvider
      .state('overview', {
        url: "/overview",
        templateUrl: "html/PageLayout.html"
      })
      .state('payments', {
        url: "/payments",
        templateUrl: "html/payments.html"
      })
      .state('investments', {
        url: "/investments",
        templateUrl: "html/investments.html"
      })
      .state('offerings', {
        url: "/offerings",
        templateUrl: "html/Exclusiveoffers.html"
      })
      .state('services', {
        url: "/services",
        templateUrl: "html/services.html"
      })

  }])

  .directive('panelDesign', function () {
    return {
      restrict: 'E',
      scope: {
        componentInfo: '=info'
      },
      templateUrl: 'html/PanelDesign.html',
      link: function ($scope, element, attributes) {
        $scope.showminus = true;
        $scope.showplus = false;
        $scope.Signtoggle = function () {
          $scope.showplus = $scope.showplus ? false : true;
          $scope.showminus = $scope.showminus ? false : true;
        }
      }
    };
  })

  .directive('panelContent', function () {
    return {
      restrict: 'E',
      template: '<ng-include src="getTemplateUrl()"/>',
      scope: {
        childinfo: '@info'
      },
      controller: function ($scope) {
        $scope.getTemplateUrl = function () {

          var myurl = "html/" + $scope.childinfo + ".html";
          
          switch ($scope.childinfo) {
            case 'offers':;
            case 'help':;
            case 'alerts':;
            case 'calender':;
            case 'rewards':;
            case 'iwish': return "html/Panelcommon.html"; break;
            default: return myurl;
          }

        }
      },
      link: function ($scope, element, attributes) {
        $scope.list1 = ['prabu', 'gopi', 'karthik', 'shankar'];
        $scope.list2 = [{ 'plans': 'Balance', 'amount': '1000' },
          { 'plans': 'Loan', 'amount': '1000' }];
        console.log('scope is ' + $scope.childinfo);
        console.log('scope is ' + $scope.comp1);
      }
    };
  })

  .directive('navigationHeader', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'html/NavigationHeader.html'
    };
  })


  .directive('navigationFooter', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'html/NavigationFooter.html'

    };
  })

  .directive('advertisePanel', function () {
    return {
      restrict: 'E',
      templateUrl: 'html/AdvertisePanel.html'
    };
  })


  .controller('BankController', ['$scope', function ($scope) {

    $scope.welcomeback = {
      ComponentName: 'welcomeback',
      head: 'WELCOME BACK',
      icon: 'lock',
      username: 'Prabu Jambulingam',
      lastvisited: '19/07/2016'
    };
    /*
    $scope.myshortcut= [
      'Mini Statement',
      'e-Statements',
        'Funds Transfer',
        'My Favourites',
        'Bill Payments',
        'Quick Pay',
        'Prepaid Recharge'
    ];
    */
    $scope.myshortcut = {
      ComponentName: 'MyShortcut',
      head: 'MY SHORTCUT',
      icon: 'star',

    };



    $scope.overview = {
      ComponentName: 'Overview',
      head: 'OVERVIEW',
      icon: 'list-alt'
    };

    $scope.offers = {
      ComponentName: 'offers',
      head: 'PRE-QUALIFIED OFFERS',
      icon: 'ice-lolly-tasted'
    };

    $scope.help = {
      ComponentName: 'help',
      head: 'MAY I HELP YOU',
      icon: 'user'
    };

    $scope.alerts = {
      ComponentName: 'alerts',
      head: 'MY ALERTS & MESSAGES',
      icon: 'comment'
    };

    $scope.calender = {
      ComponentName: 'calender',
      head: 'MY CALENDER',
      icon: 'calendar'
    };

    $scope.rewards = {
      ComponentName: 'rewards',
      head: 'REWARDS',
      icon: 'gift'
    };

    $scope.iwish = {
      ComponentName: 'iwish',
      head: 'iwish',
      icon: 'leaf'
    };

    $scope.advertise = {
      ComponentName: 'addvertise',
      head1: 'Atel Pension Yojana',
      content1: 'A government offering with pension amount between Rs. 1000 -5000 pm. Invest in Atal Pension Yojana TODAY.',
      head2: 'Online Initial Public Offering',
      content2: 'You can now invest in IPO using your Internet Banking Account. Click here to invest.'

    };

  }]);