var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
        .otherwise({ redirectTo: '/'
    });
});

app.controller('HomeController', function ($scope, $sce) {
    $scope.message = "testing testing testing";
    
    $scope.videos = [
        {name: "Mouth Like That",
         description: "OK, what I do is, wash it with Head and Shoulders. I don't dry it, though. I let it dry by itself. It takes about an hour. Then I read papers and things. This morning I read in the New York Post about Jerry Seinfeld backing out of his commitment to do a benefit for my son Eric's charity.",
         embed: $sce.trustAsHtml('<iframe src="https://www.youtube.com/embed/s2U_Wvew_Hw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')},
        {name: "Wicked Games",
         description: "And we’re going to have victories. So many victories that are going to be coming out…In fact, you might get tired of victories. If I win, we will have victories all over. We will win on trade. We will win on health care. We will win on everything.",
         embed: $sce.trustAsHtml('<iframe src="https://www.youtube.com/embed/qNi-QcRCSSQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')},
        {name: "Castles",
         description: "I had a lawyer come up to see me a little while ago that said Mr. Trump, I've been doing this for 35 years and never seen what happened here. I got a call from a writer from The New York Times. I have great respect for The New York Times. And called up -- I know. I hear that. OK.",
         embed: $sce.trustAsHtml('<iframe src="https://www.youtube.com/embed/iYFo8w9R6t0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')}
    ];
});

var removeLanding = function () {
    var img = document.getElementById("landing-image");
    img.style.display = "none";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    AOS.refresh();
};
    
app.controller('StoreController', function ($scope) {
    $scope.message = "testoreing testing testing";
    removeLanding();
});

app.controller('AboutController', function ($scope) {
    $scope.message = "Abouty testing testing testing";
    removeLanding();
});

app.controller('ContactController', function ($scope) {
    $scope.message = "contacto testing testing testing";
    removeLanding();
});


//    $scope.gigs = [
//        {name: 'Pars and Guitars', venue: 'Purple Turtle', city: 'Reading'},
//        {name: 'Time for Grime', venue: 'KP Stationers', city: 'Wallingford'},
//        {name: 'Wine and Dine (and Grime)', venue: 'Phones4U', city: 'Reading'},
//        {name: 'Gemmas Gangster Gathering', venue: 'Gemmas Yard', city: 'Leeeeds' }
//    ];