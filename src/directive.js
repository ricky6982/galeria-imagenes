var urlApi = "";

function setUrlApi(url){
    urlApi = url;
}

function getUrlApi(){
    return url;
}

angular.module('galeria-imagenes', [])
    .factory('sv-galeria', [
        '$http', '$q',
        function($http, $q){
            return {
                getImagenes: function(){
                    return [
                        "http://lorempixel.com/800/600/sports/1/",
                        "http://lorempixel.com/800/600/sports/2/",
                        "http://lorempixel.com/800/600/sports/3/",
                        "http://lorempixel.com/800/600/sports/5/",
                        "http://lorempixel.com/800/600/sports/6/",
                        "http://lorempixel.com/800/600/sports/7/",
                        "http://lorempixel.com/800/600/sports/8/",
                        "http://lorempixel.com/800/600/food/1/",
                        "http://lorempixel.com/800/600/food/2/",
                        "http://lorempixel.com/800/600/food/3/",
                        "http://lorempixel.com/800/600/food/5/",
                        "http://lorempixel.com/800/600/food/6/",
                        "http://lorempixel.com/800/600/food/7/",
                        "http://lorempixel.com/800/600/food/8/",
                        "http://lorempixel.com/800/600/people/1/",
                        "http://lorempixel.com/800/600/people/2/",
                        "http://lorempixel.com/800/600/people/3/",
                        "http://lorempixel.com/800/600/people/5/",
                        "http://lorempixel.com/800/600/people/6/",
                        "http://lorempixel.com/800/600/people/7/",
                        "http://lorempixel.com/800/600/people/8/"
                    ];
                },
                urlApi: setUrlApi
            };
        }
    ])
    .directive('dtGaleria', [
        'sv-galeria',
        function(galeria){
            return {
                restrict: "AE",
                replace: true,
                scope: {
                    dsrc: '=',
                },
                template: '<img ng-src="{{ dsrc }}" class="img-loading img-thumbnail"/>',
                link: function(scope, ele, attr){
                    ele.on('load', function(){
                        ele.removeClass('img-loading');
                    });
                }
            };
        }
    ])
;

