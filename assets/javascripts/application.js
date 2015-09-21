MyListApp = new Backbone.Marionette.Application();

MyListApp.addRegions({
	
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

ApplesView = Backbone.Marionette.CompositeView.extend({
	tagName: "table",
	id: "Apples",
	className: "table-striped table bordered",
	template: "#apples-template",
	itemView: "AppleView",
	
	 initialize: function(){
    this.listenTo(this.collection, "sort", this.renderCollection);
  },
	
	appendHtml: function(collectionView, itenView){
		collectionView.$("tbody").append(itemView.el);
	}
	
});

MyListApp.addInitializer(function(options){
	var applesView = new ApplesView({
		collection: options.Apples
	});
	MyListApp.mainRegion.show(ApplesView);
});

$(document).ready(function(){
	var manyApples = new Apples([
		new Apple({ name: 'Greeb Apple'}),
		new Apple({ name: 'Red Apple'}),
		new Apple({ name: 'Blue Apple'}),
		new Apple({ name: 'Yellow Apple'}),
	]);

	MyListApp.start({manyApples: manyApples});
});
	
	
