sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast"
    
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("josecarlos.html5module.controller.Tertiary", {

        onInit: function () {
        var oEventBus = this.getOwnerComponent().getEventBus();
        oEventBus.subscribe("channel1", "event1", this.onDataReceivedTerc, this);
        oEventBus.subscribe("channel1", "event2", this.onSaludarTertiary, this);
        },
      
        onNavToApp: function () {
            sap.ui.core.UIComponent.getRouterFor(this).navTo("App");
        },
        onNavToSecondary: function () {
            sap.ui.core.UIComponent.getRouterFor(this).navTo("Secondary");
        },

        onDataReceivedTerc: function (sChannelId, sEventId, oData) {
        console.log("Dato recuperado desde el controlador de la vista Tertiary:", oData.nombre);
        },

        onSaludarTertiary: function (sChannelId, sEventId) {
            sap.m.MessageToast.show("Saludos desde Tertiary");
        },







    });
});
