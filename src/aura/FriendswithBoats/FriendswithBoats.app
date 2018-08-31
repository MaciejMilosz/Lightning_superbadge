<!--
 - Created by mmilo on 8/30/2018.
 -->


<aura:application extends="force:slds" description="FriendswithBoats">
    <lightning:layout multipleRows="true">
        <lightning:layoutItem size="8" smallDeviceSize="12" mediumDeviceSize="12" largeDeviceSize="8" padding="around-small">
            <c:BoatSearch />
        </lightning:layoutItem>
        <lightning:layoutItem size="4" smallDeviceSize="12" mediumDeviceSize="12" largeDeviceSize="4" padding="around-small">
            <c:BoatDetails />
            <c:Map />
        </lightning:layoutItem>
    </lightning:layout>
</aura:application>