import { LightningElement, api } from 'lwc';

export default class ShowPdfById extends LightningElement {
    @api fileId = 'https://djmsf-dev-ed--c.documentforce.com/servlet/servlet.FileDownload?file=00P6g00000C0XkV';
    @api heightInRem = 500;

    get pdfHeight() {
        return 'height: ' + this.heightInRem + 'rem';
    }
    
    get url() {
        return '/sfc/servlet.shepherd/document/download/' + this.fileId;
    }
}