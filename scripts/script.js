var app = angular.module('fimApp', []);
app.controller('AppCtrl', function($scope){
    $scope.mensagem='Opa, Deu Certo!';
    $scope.contatos=[{
        nome: 'Leandro Reis 1',
        telefone: 111222333
    },
    {
        nome: 'Leandro Reis 2',
        telefone: 222333444
    },
    {
        nome: 'Leandro Reis 3',
        telefone: 333444555
    }];
    $scope.exibirNome = function(nome){
        console.log(nome);
    }

});