sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
     "use strict";
     return Controller.extend("ui5.walkthrough.controller.App", 
     {  onShowClick() {
        // show a native Javascript alert
        alert("버튼을 클릭하셨습니다");
        },
        });
        });