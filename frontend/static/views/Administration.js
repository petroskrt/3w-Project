import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Administration");
    }

    async getHtml() {
        return `
            <h1>Διαχείρηση Χρηστών</h1>
        `;
    }
}