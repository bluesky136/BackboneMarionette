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

ApplesView = Backbone.Marionnete.CompositeView.extend({
	tagName: "table",
	id: "Apples",
	className: "table-striped table bordered",
	template: "#apples-template",
	itemView: "appleView",
	
	initialize: function(){
		this.listenTo(this.collection, "sort", this.renderCollection);
	},
	
	appendHtml: function(collectionView, itenView){
		collectionView.$("tbody").append(itemView.el);
	}
	
});

MyListApp.addInitializer(function(options){
	var applesView = new applesView({
		collectionL options.apples
	});
	MyListApp.mainRegion.show(applesView);
});
