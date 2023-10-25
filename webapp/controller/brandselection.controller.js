sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent",
], function (Controller, MessageToast, History, UIComponent) {
  "use strict";

  return Controller.extend("luxasia.controller.brandselection", {
    onInit: function () { },
    //Nav Back start//
    getRouter: function () {
      return UIComponent.getRouterFor(this);
    },

    onNavBack: function () {
      var oHistory, sPreviousHash;

      oHistory = History.getInstance();
      sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getRouter().navTo("View1", {}, true);
      }
    },
    //nav back end//
    //search//
    onSearch: function () {
      var mobileNumber = this.getView().byId("mobileInput").getValue();
      var emailAddress = this.getView().byId("emailInput").getValue();
      var name = this.getView().byId("nameInput").getValue();
      var surname = this.getView().byId("surnameInput").getValue();

      var data = [
        { mobile: "1234567890", email: "user1@example.com", name: "ABC", surname: "DEF" },
        { mobile: "9876543210", email: "user2@example.com", name: "GHI", surname: "JKL" },
      ];

      var searchResults = data.filter(function (item) {
        return (
          (mobileNumber === "" || item.mobile.includes(mobileNumber)) &&
          (emailAddress === "" || item.email.includes(emailAddress)) &&
          (name === "" || item.name.includes(name)) &&
          (surname === "" || item.surname.includes(surname))
        );
      });

      if (searchResults.length > 0) {
        MessageToast.show("Search results found!");
      } else {
        MessageToast.show("No results found.");
 
        this.getView().byId("mobileInput").setValue("");
        this.getView().byId("emailInput").setValue("");
        this.getView().byId("nameInput").setValue("");
        this.getView().byId("surnameInput").setValue("");
      }
    }

    //search//
  });
});