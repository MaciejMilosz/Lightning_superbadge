/**
 * Created by mmilo on 8/29/2018.
 */
({
    onSearch: function(component,helper,boatTypeId){
        var action = component.get("c.getBoats");
        var params = {"boatTypeId" : boatTypeId};
        if (params) {
            action.setParams(params);
        }
        action.setCallback(this , function(response){
            var state = response.getState();
            //console.log(state);
            if (state === "SUCCESS"){
                var boats = response.getReturnValue();
                component.set("v.boats", boats);
            } else if (state === "INCOMPLETE") {
                console.log("Failed to connect Salesforce!!");
            }else if (state === "ERROR") {
                var errors = response.getError();
                if (!errors) {
                    errors = [{"message" : "Unknown Error Occured"}];
                }
                console.log(errors);
            }
        });
        $A.enqueueAction(action);
    }
})