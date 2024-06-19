sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      init() {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        const oData = {
          recipient: {
            name: "World", //초기값지정
          },
          recipient2: {
            name: "World2",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        // // //2번째 패널
        // const oData2 = {
        //   recipient2: {
        //     name2: "World2",
        //   },
        // };

        // const oModel2 = new JSONModel(oData2);
        // this.setModel(oModel2);

        // // set i18n model
        // const i18nModel = new ResourceModel({
        //   bundleName: "ui5.walkthrough.i18n.i18n",
        // });
        // this.setModel(i18nModel, "i18n");
      },
    });
  }
);
