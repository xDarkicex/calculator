// 'use strict';

// var phonecatApp = angular.module('phonecatApp', []);

// phonecatApp.controller('PhoneListCtrl', function($scope) {
// 	$scope.phones = [
// 	{'key': 'NEXUS',
// 	 'value': 'Fast Just Got That much Faster with the new Nexus 5'},
// 	{'key': 'OPPO ',
// 	 'value': 'The Next, Next Generation'},
// 	{'key': 'TECH WEEK',
// 	 'value': 'Never Settle'},
// 	{'key': 'Samsung',
// 	 'value': 'Fast Just Got That much Faster with the new Nexus 6'},
// 	{'key': 'LG',
// 	 'value': 'The Next, Next, Next Generation'},
// 	{'key': 'Pebble',
// 	 'value': 'Never Settle, Again!'}

// 	];
// });


$("button").click(function(){
  var y = $(this).attr("value");
  console.log(y);
});

$("button").click(function(){
  var x = $(this).attr("value");
  console.log(x);
});