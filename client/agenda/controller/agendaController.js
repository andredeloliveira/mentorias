

var getEvents = function(start, end){
    return [];
}
angular.module("mentorias")
  .controller("agendaController", function ($mdDialog, $scope) {
    var evc = this;
    var tracker = new Tracker.Dependency();
    evc.eventSources = [];

    $meteor.autorun($scope, function () {
      tracker.depend();
      var start = $scope.view && $scope.view.start;
      var end = $scope.view && $scope.view.end;
      if (!start || !end) {
        return;
      }
      $meteor.subscribe("Eventos", start, end).then(function (subscriptionHandle) {
        var events = getEvents(start, end);
        $cal = angular.element("#eventCalendar");
        $cal.fullCalendar("removeEvents");
        $cal.fullCalendar("addEventSource", events);
        subscriptionHandle.stop();
      });
    });
    
     evc.calendarConfig = {
       viewRender: function (view, render) {
        $scope.view = {
          start: view.start.toDate(),
          end: view.end.toDate()
        };
        tracker.changed();
      }
     } 
  });