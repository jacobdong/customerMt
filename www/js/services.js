angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Customers', function() {
  var customers = [];
  var prefix = ['A','B','C','D','E','F','G','H','I','J','K'];
  var status = [
    "PLANNING", //未开始
    "DOING",  //正在进行
    "PEDING",   //卡住
    "DONE",    //结束
    "OVERDUE" //逾期
  ]

  for(var i = 0; i< 11; i++){
      var index = Math.floor(Math.random()*5);
      var customer = {
        id:i,
        status:status[index],
        name: prefix[i] + '_name' + (i + 1),
        commits:[],
        start_date:"2012-12-12",
        plan_time: "2013-02-12",
        track:[
          {
            status:'PLANNING',
            create_date:"2012-12-12",
            owner:'jacobdong',
            message:"This template loads  "
          },
          {
            status:'DOING',
            create_date:"2012-12-13",
            owner:'jacobdong',
            message:"S1"
          },
          {
            status:'DOING',
            create_date:"2012-12-14",
            owner:'jacobdong',
            message:"S2"
          },
          {
            status:'DOING',
            create_date:"2012-12-15",
            owner:'jacobdong',
            message:"S3"
          },
          {
            status:'DOING',
            create_date:"2012-12-16",
            owner:'jacobdong',
            message:"S4"
          },
          {
            status:'DOING',
            create_date:"2012-12-17",
            owner:'jacobdong',
            message:"S5"
          },
          {
            status:'DONE',
            create_date:"2012-12-18",
            owner:'jacobdong',
            message:"This template loads for the 'tab.friend-detail' state (app.js)'friend' is a $scope variable created in the FriendsCtrl controller (controllers.js)"
          }
        ]
      }
     // console.log('add');
      customers.push(customer);
    }
  return{
    all: function(){
      return customers;
    },
    get: function(id){
      for (var i = 0; i < customers.length; i++) {
        if (customers[i].id === parseInt(id)) {
          return customers[i];
        }
      }
      return null;
    }
  }
})