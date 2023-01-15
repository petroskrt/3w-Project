import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Viewing Photos");
    }

    async getHtml() {
        console.log(this.params.id);
        return `
            <h1>Φωτογραφίες</h1>
        `;

        <a href="#"><img src="/frontend/photos/Elytis-612x400.jpg" alt=""></img></a>
    }
}