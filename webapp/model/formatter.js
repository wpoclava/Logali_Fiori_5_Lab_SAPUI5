sap.ui.define([], function() {
	
	return {
		contactTitleText: function(sContactTitle) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			
			switch(sContactTitle) {
				case "S": return resourceBundle.getText("customerContactTitleS");
				case "O": return resourceBundle.getText("customerContactTitleO");
				case "A": return resourceBundle.getText("customerContactTitleA");
				default: return sContactTitle;
			}
		} 
	};
});