/**
 * Created by mmilo on 8/30/2018.
 */

public with sharing class BoatSearchFormController {
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        return [SELECT Id, Name FROM BoatType__c];
    }
}