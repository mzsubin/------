// sap.ui.define([], () => {
// 	"use strict";
// 	/* eslint-disable no-alert */
// 	alert("UI5 is ready");
// 	/* eslint-enable no-alert */
// // });

// sap.ui.define(["sap/ui/core/mvc/XMLView"],
// (XMLView) => { "use strict";
//  XMLView.create({viewName: "ui5.walkthrough.view.App"}).then((oView) => oView.placeAt("content"));});

sap.ui.define(["sap/ui/core/ComponentContainer"], (ComponentContainer) => {
  "use strict";

  new ComponentContainer({
    name: "ui5.walkthrough",
    settings: {
      id: "walkthrough",
    },
    async: true,
  }).placeAt("content");
});
