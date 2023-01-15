import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Photos");
    }

    async getHtml() {
        return `
            <h1>Φωτογραφίες του συγγραφέα</h1>
        `;

        <a href="#"><img src="/frontend/photos/Elytis-612x400.jpg" alt=""></img></a>
    }
}