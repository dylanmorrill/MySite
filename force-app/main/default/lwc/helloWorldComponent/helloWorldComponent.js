import { api, LightningElement } from 'lwc';

export default class HelloWorldComponent extends LightningElement {
    @api message;
    @api recordId;
}