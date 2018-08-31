/**
 * Created by mmilo on 8/29/2018.
 */

public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        List<Boat__c> boats = new List<Boat__c>();
        if (String.isEmpty(boatTypeId)) {
            boats = [SELECT Id,Name,Picture__c,Contact__r.Name, Geolocation__Longitude__s, Geolocation__Latitude__s FROM Boat__c];
        } else{
            boats = [SELECT Id,Name,Picture__c,Contact__r.Name, Geolocation__Longitude__s, Geolocation__Latitude__s FROM Boat__c WHERE BoatType__c = :boatTypeId ];
        }
        return boats;
    }
}