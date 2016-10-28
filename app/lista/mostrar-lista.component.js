angular.
module("mostrarLista").
component("mostrarLista", {
    templateUrl: 'app/lista/mostrar-lista.template.html',
    controller: function TestAppController() {
        this.lista = [{
            nombre: "prueba1",
            text: "me cago en to angular"
        }, {
            nombre: "prueba2",
            text: "puta mierda"

        }];
    }

});
