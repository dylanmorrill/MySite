import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Salesforce_Engineer__c.Name';
import EMAIL_FIELD from '@salesforce/schema/Salesforce_Engineer__c.Email__c';
import LOCATION_FIELD from '@salesforce/schema/Salesforce_Engineer__c.Location__c';
import ON_JOB_MARKET_FIELD from '@salesforce/schema/Salesforce_Engineer__c.On_The_Job_Market__c';
import TECH_SKILLS_FIELD from '@salesforce/schema/Salesforce_Engineer__c.Tech_Skills__c';


export default class MySite_body extends LightningElement {
  nameField = NAME_FIELD;
  emailField = EMAIL_FIELD;
  locationField = LOCATION_FIELD;
  onJobMarketField = ON_JOB_MARKET_FIELD;
  techSkillsField = TECH_SKILLS_FIELD;
}