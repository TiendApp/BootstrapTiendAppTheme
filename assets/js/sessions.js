angular.module('sessionModal', [])

.controller('sessionModalController', ['$timeout', function($timeout) {
  controller = this;
  this.modal = false;

  var states = ["Conectarse", "Crear Cuenta", "Recuperar Contraseña"]
  this.tab = 0;
  this.submit = states[0];

  this.setState = function (id) {
    controller.tab = id;
    controller.submit = states[id];
  };


  this.toggle = function () {
    controller.setState(0);
    controller.modal = !controller.modal;
  };

}]);


var app = angular.module('tiendAppFrontend');
app.requires.push('sessionModal');

