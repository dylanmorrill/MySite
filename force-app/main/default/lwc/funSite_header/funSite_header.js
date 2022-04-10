import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';


export default class FunSite_header extends LightningElement {
    logoMap = new Map([
        [0, 'https://i.imgur.com/wkrPuN7.png'],
        [1, 'https://i.imgur.com/nxWjhRH.png'],
        [2, 'https://i.imgur.com/czkLhIW.png'],
        [3, 'https://i.imgur.com/u9IB9jj.png'],
        [4, 'https://i.imgur.com/1VmPVJb.png'],
        [5, 'https://i.imgur.com/aL5WQLp.png'],
    ])

    logoToUse;

    connectedCallback(){
        this.logoToUse = this.logoMap.get(Math.floor(Math.random() * 6));
    }

    updateSearch(event) {

    }


}