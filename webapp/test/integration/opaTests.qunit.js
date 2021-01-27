/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {

	sap.ui.require([
		"logaligroup/Customers/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});