sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel" 
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("luxasia.controller.storeselection", {
        onInit: function () {},

        onNextPagePress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("brand");
        }
    });
});