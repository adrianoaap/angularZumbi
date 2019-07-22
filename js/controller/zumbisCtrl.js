angular.module('app')
.controller('zumbisCtrl', function ($scope) {
    var vm = this
    vm.ocorrencias = []
    vm.adcionar = function (itemOcorrencia) {
        vm.ocorrencias.push(angular.copy(itemOcorrencia))
        console.log(angular.copy(itemOcorrencia));
    }

    vm.txtFocus = function(){
       document.getElementById('cep').focus()
       document.getElementById('cep').style.color='Red'
    }

    vm.limpar = function(itemOcorrencia){
        vm.ocorrencias = []
        itemOcorrencia.cep = ''
        itemOcorrencia.bairro = ''
        itemOcorrencia.numero =''
        vm.txtFocus()
    }
});