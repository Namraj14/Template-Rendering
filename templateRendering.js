import { LightningElement } from 'lwc';

export default class TemplateRendering extends LightningElement {

    showMessage = false;

    get buttonLabel() {
        return this.showMessage ? 'Hide Message' : 'Show Message';
    }

    handleClick(event) {
        this.showMessage = !this.showMessage;
    }
}