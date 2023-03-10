/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"josecarlos/html5_module/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
