({
    doInit : function(component, event, helper) {
        helper.onSearch(component,helper,"");
    },

    doSearch : function(component, event, helper) {
        var args = event.getParam('arguments');
        if(args) {
            helper.onSearch(component,helper,args.boatTypeId);
        }
    },
    onBoatSelect : function (component, event, helper) {
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
    }
})