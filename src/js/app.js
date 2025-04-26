var app = angular.module('vehicleRentalApp', []);

app.controller('MainController', function($scope) {
    $scope.vehicleCategories = [
        {
            name: 'Luxury Cars',
            description: 'Experience the best in comfort and style.',
            image: 'images/luxury-car.jpg'
        },
        {
            name: 'SUVs',
            description: 'Spacious and powerful SUVs for every terrain.',
            image: 'images/suv.jpg'
        },
        {
            name: 'Motorbikes',
            description: 'Speed through city or highways with top bikes.',
            image: 'images/bike.jpg'
        },
        {
            name: 'Electric Vehicles',
            description: 'Go green and drive into the future.',
            image: 'images/ev.jpg'
        }
    ];

    // Modal Logic
    $scope.isModalOpen = false;
    $scope.selectedCategory = {};

    $scope.openModal = function(category) {
        $scope.selectedCategory = category;
        $scope.isModalOpen = true;
    };

    $scope.closeModal = function() {
        $scope.isModalOpen = false;
    };
});
