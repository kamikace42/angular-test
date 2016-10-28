angular.
module("testApp").
component("mostrarLista", {
    template: `<li ng-repeat="key in $ctrl.lista">
	                    <p>{{key.nombre+" - "+key.text}}</p>
	                </li>`,
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
