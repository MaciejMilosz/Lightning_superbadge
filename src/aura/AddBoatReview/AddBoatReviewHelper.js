/**
 * Created by mmilo on 8/30/2018.
 */
({
    onInit : function(component, event, helper){
        component.find("service").getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function(){
                var record = component.get("v.boatReview");
                var errorMsg = component.get("v.errorMsg");
                if(errorMsg || record === null ){
                    console.log('-V- error during init of a record');
                    return;
                }
                component.set("v.boatReview.Rating__c", 3);
                component.set("v.boatReview.Boat__c", component.get("v.boat.Id"));
                console.log('-V- record initalized:');
                console.log(component.get("v.boatReview"));
            })
        );
    },
})