sap.ui.define([
	// parte declarativa
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	// zona restrictiva o privada
	"use strict";

	return Controller.extend("logaligroup.Customers.controller.App", {
		// funciones que la vista que usa éste controlador tendrá acceso

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		onOpenHeader: function () {

			//se llama a la funcion openHelloDialog del Component
			this.getOwnerComponent().openHelloDialog();

		}
	});
});