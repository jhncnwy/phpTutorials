/*
* Author: John Conway
* Assignment: WE4 Mobile  Web Applications, Digital Skills  Academy
* Date : 2016/09/12
* Ref:  Code snippets from: https://www.youtube.com/watch?v=FSOiVprDdj0
*/
     


      angular.module('ToDo',[]).
      controller('todoController',['$scope', function($scope){
          $scope.todos = [
            {'title': 'Welcome to the Todo App!', 'done': false}
          ];

          $scope.addTodo = function(){
            $scope.todos.push({'title': $scope.newTodo, 'done': false})
            $scope.newTodo = ''

          }
          $scope.clearCompleted = function(){
            $scope.todos = $scope.todos.filter(function(item){
              return !item.done

            })
          }


      }])



