# 🌟 Hello World Toggle (Lightning Web Component)

This is a beginner-friendly Lightning Web Component (LWC) that demonstrates how to use a button to toggle the visibility of a welcome message — "Hello, World!". It introduces key LWC concepts like event handling, conditional rendering, JavaScript getters, and ternary operators.

---

## 📁 Component Files Overview

### 1. `helloWorldToggle.html`

This file contains the HTML structure of the component.

```html
<template>
    <lightning-card title="Hello World Toggle" icon-name="custom:custom14">
        <div class="slds-p-around_medium">
            <lightning-button 
                label={buttonLabel} 
                onclick={handleToggle}
                variant="brand">
            </lightning-button>

            <template if:true={showMessage}>
                <p class="slds-m-top_medium">👋 Hello, World! Welcome to Lightning Web Components.</p>
            </template>
        </div>
    </lightning-card>
</template>
lightning-button: A standard Salesforce Lightning button component.

label={buttonLabel}: Dynamically shows "Show Message" or "Hide Message" using a JavaScript getter.

<template if:true={showMessage}>: Conditionally renders the welcome message based on a boolean variable.

2. helloWorldToggle.js
This file contains the JavaScript logic for the component.


import { LightningElement } from 'lwc';

export default class HelloWorldToggle extends LightningElement {
    showMessage = false; // Boolean variable to track message visibility

    // Getter function to dynamically set button label
    get buttonLabel() {
        // Ternary operator: if showMessage is true, return "Hide Message", else "Show Message"
        return this.showMessage ? 'Hide Message' : 'Show Message';
    }

    // Method to toggle the message visibility
    handleToggle() {
        this.showMessage = !this.showMessage; // Flip the value of showMessage
    }
}
🧠 Explanation of Concepts:
Getter (get):
In JavaScript, a getter is a special method used to calculate and return a value. In this case:


get buttonLabel() {
    return this.showMessage ? 'Hide Message' : 'Show Message';
}
It means: if showMessage is true, return "Hide Message"; otherwise, return "Show Message".

Ternary Operator (condition ? valueIfTrue : valueIfFalse):
A shorthand for if-else logic. In this case:


this.showMessage ? 'Hide Message' : 'Show Message';
If showMessage is true → "Hide Message", else → "Show Message".

this.showMessage = !this.showMessage:
This line flips the boolean value.
If it was false, it becomes true — and vice versa.

3. helloWorldToggle.js-meta.xml
This file makes the component available in the Lightning App Builder.

<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>59.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>
