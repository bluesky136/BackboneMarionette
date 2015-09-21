MyListApp = new Backbone.Marionette.Application();

MyListApp.addRegion({
	
	mainRegion: "#content"
	
});

Apple = Backbone.Model.extend({});


Apples = Backbone.Collection.extend({
	model: Apple

});

AppleView = Backbone.Marionette.ItemView.extend({
	template: "#apple-template",
	tagName: 'tr',
	className: 'Apple'
	
});