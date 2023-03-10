sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/m/MessageToast"
    
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("josecarlos.html5module.controller.Secondary", {

        onInit: function () {
        var oEventBus = this.getOwnerComponent().getEventBus();
        oEventBus.subscribe("channel1", "event1", this.onDataReceivedSec, this);
        },
        onNavToApp: function () {
            sap.ui.core.UIComponent.getRouterFor(this).navTo("App");
        },
        onNavToTertiary: function () {
            sap.ui.core.UIComponent.getRouterFor(this).navTo("Tertiary");
        },
      
        onDataReceivedSec: function (sChannelId, sEventId, oData) {
            console.log("Dato recuperado desde el controlador de la vista Secondary:", oData.nombre);
        },



    });
});
