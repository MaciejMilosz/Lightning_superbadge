/**
 * Created by mmilo on 8/30/2018.
 */
({
    doInit : function(component, event, helper){
        helper.onInit(component, event, helper);
    },

    onRecordUpdated : function(component, event, helper){

    },

    onSave : function(component, event, helper){
        var reviewService = component.find("service");
        // component.set("v.boarReview.Boat__c", component.get("v.boat.Id"));
        reviewService.saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // record is saved successfully
                var resultsToast = $A.get("e.force:showToast");
                if(resultsToast) {
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "Review saved!"
                    });
                    resultsToast.fire();
                }else{
                    alert("Review saved!");
                }
                helper.doInit(component, event, helper);
                console.log('-V- firing an event!');
                component.getEvent("BoatReviewAdded").fire();

            } else if (saveResult.state === "INCOMPLETE") {
                // handle the incomplete state
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                // handle the error state
                console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        });
    },
})