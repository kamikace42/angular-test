angular.
module("mostrarLista").
component("mostrarLista", {
    templateUrl: 'app/lista/mostrar-lista.template.html',
    controller: function TestAppController() {
        this.lista = [{
            nombre: "aprueba1",
            text: "bme cago en to angular"
        }, {
            nombre: "xprueba2",
            text: "aputa mierda"

        }];
        this.orden = "text";
    }

});
