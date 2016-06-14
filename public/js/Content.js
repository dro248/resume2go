(function(Rezoomae){

	if (!Rezoomae) {
		console.log("Rezoomae not initialized.", "Include Rezoomae.js first.");
		return;
	}

	/**
	 * class that will hold the content for the current resume
	 */
	function Content(args) {
		args = args || {};
		this.meta = {
			title: args.meta.title || "",
			mainImagePath: args.meta.mainImagePath || "",
			phone: args.meta.phone || "",
			identifier: args.meta.identifier || ""
		};
		this.content = args.content || [];
	}

	Content.prototype.setContent = function(args) {
		if (!args || args.meta.identifier === "") { return; }
		this.meta = {
			title: args.meta.title || "",
			mainImagePath: args.meta.mainImagePath || "",
			phone: args.meta.phone || "",
			identifier: args.meta.identifier || ""
		};
		this.content = args.content || [];
	};

	Content.prototype.toString = function() {
		var obj = {
			meta: this.meta,
			content: this.content
		};
		return JSON.stringify(obj);
	};

	Content.prototype.getIdentifier = function() {
		return this.meta.identifier;
	};

	Content.prototype.getTitle = function() {
		return this.meta.title;
	};

	Content.prototype.getMainImage = function() {
		return this.meta.mainImagePath;
	};

	Content.prototype.getPhone = function() {
		return this.meta.phone;
	};

	Content.prototype.getContent = function() {
		return this.content;
	};

	Content.prototype.getMetadata = function() {
		return this.meta;
	};

	Content.prototype.getHeadings = function() {
		return this.content.map(function(o){return o.title;});
	};

	Content.prototype.contentList = function() {
		return this.content.map(function(o){
			return {
				title: Object.keys(o)[0],
				content: o[Object.keys(o)[0]]
			}
		});
	};

	Rezoomae.classes.Content = Content;

}(Rezoomae));
