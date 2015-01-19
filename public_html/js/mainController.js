hg.controller('mainController', function($scope, people) {
  

  $scope.data = people.get(); //here is the promise set as the data source
  $scope.columns = [ {
          field: "FirstName",
          width: 90,
          title: "First Name"
      } , {
          field: "LastName",
          width: 90,
          title: "Last Name"
      } , {
          width: 100,
          field: "City"
      } , {
          field: "Title"
      } , {
          field: "BirthDate",
          title: "Birth Date",
          template: '#= kendo.toString(BirthDate,"dd MMMM yyyy") #'
      } , {
          width: 50,
          field: "Age"
      }
  ];
  
});


