Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

	_loadGrid: function(myStore){
		var myGrid = Ext.create('Rally.ui.grid.Grid',{
						store: myStore,
						columnCfgs: [
							'formatted ID', 'Owner', 'Formatted ID', 'Name', 'ScheduleState'
							]
				});
		this.add(myGrid);
	
	},
	_loadData: function(){
		Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(myStore, myData, success) {
					//process data
					this._loadGrid(myStore);
			},
				scope: this
		},
		fetch: ['formattedID','Owner', 'Formatted ID', 'Name', 'ScheduleState']
		});
	},
	launch: function() {		
	this._loadData();
    },


});
