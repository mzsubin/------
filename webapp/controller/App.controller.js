sap.ui.define(
  [
    //여기서 사용할 클래스 선언
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],

  (Controller, MessageToast, JSONModel, ResourceModel) => {
    //여기서 선언한 클래스 중 사용할 이벤트 선언
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        //set data model on view
        const oData = {
          //1. oData라는 변수를 선언
          recipient: {
            name: "이게 초기값인가", //oData변수에 초기값 설정
          },
        };
        const oModel = new JSONModel(oData); //oData라는 변수에 담긴 내용을 그대로 oModel에 다시 담고
        this.getView().setModel(oModel); //여기서 메소드를 호출 => 클래스에 어떤 메소드가 담겨 있는지는 ui5 demo kit사이트 참조

        // set i18n model on view
        const i18nModel = new ResourceModel({
          bundleName: "ui5.walkthrough.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
      },

      onShowClick() {
        // read msg from i18n model
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        const sMsg = oBundle.getText("clickMsg", [sRecipient]);
        // show a native Javascript alert
        MessageToast.show(sMsg);
      },
    });
  }
);
