/**
 * Created by mmilo on 8/30/2018.
 */
({
    onRecordUpdated : function(component, event, helper){
        var elem = component.find("boatReviewCmp");
        console.log(elem);
        if(elem) {
            elem.refresh();
        }
    },

onBoatSelected : function (component, event, helper) {
    var boat = event.getParam("boat");
        console.log('-V- boatid: ' + boat.Id);
        component.set("v.id", boat.Id);
        component.find("service").reloadRecord();
    },

    onBoatReviewAdded : function(component, event, helper) {
        console.log('-V- in event handler');
        console.log(component.find("boatReviewCmp"));
        component.find("details").set("v.selectedTabId", "boatreviewtab");
        // component.set("v.selectedTab", "boatreviewtab");
        component.find("boatReviewCmp").refresh();
    }
})