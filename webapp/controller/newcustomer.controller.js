sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
   
], function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("luxasia.controller.newcustomer", {
        onInit: function () {},

        onCreateProfile: function () {
            var view = this.getView();
      
           
            var title = view.byId("titleInput").getValue();
            var name = view.byId("nameInput").getValue();
            var surname = view.byId("surnameInput").getValue();
            var emailAddress = view.byId("emailInput").getValue();
            var countryCode = view.byId("countryCodeComboBox").getSelectedKey();
            var mobileNumber = view.byId("mobileNumberInput").getValue();
            var dateOfBirth = view.byId("dateOfBirthInput").getValue();
            var customerAddress = view.byId("customerAddressInput").getValue();
      
            var newProfile = {
              title: title,
              name: name,
              surname: surname,
              email: emailAddress,
              countryCode: countryCode,
              mobileNumber: mobileNumber,
              dateOfBirth: dateOfBirth,
              customerAddress: customerAddress,
            };
      
            MessageToast.show("New profile created and data saved successfully!");
      
           
            view.byId("titleInput").setValue("");
            view.byId("nameInput").setValue("");
            view.byId("surnameInput").setValue("");
            view.byId("emailInput").setValue("");
            view.byId("countryCodeComboBox").setSelectedKey("");
            view.byId("mobileNumberInput").setValue("");
            view.byId("dateOfBirthInput").setValue("");
            view.byId("customerAddressInput").setValue("");
          },
    });
});