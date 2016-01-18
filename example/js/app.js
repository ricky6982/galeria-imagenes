var app = angular.module('app', ['galeria-imagenes', 'angularUtils.directives.dirPagination']);

app.controller('AppCtrl', [
    '$scope', 'sv-galeria',
    function($scope, galeria) {
        $scope.valor = "prueba";
        $scope.imagenes = galeria.getImagenes();
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.visualizar = function(index){
            $scope.imagenSeleccionada = $scope.imagenes[index];
        };
    }
]);