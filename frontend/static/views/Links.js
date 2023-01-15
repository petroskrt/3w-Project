import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Links");
    }

    async getHtml() {
        return `
            <h1>Σύνδεσμοι σχετικά με το έργο του συγγραφέα</h1>
            <p>https://www.nobelprize.org/prizes/literature/1979/summary/
               https://web.archive.org/web/20110415084257/http://www.patris.gr/articles/45147/12061?PHPSESSID=2b8f0032cb20c2d65b4d2917372d4c39
               https://web.archive.org/web/20070321145042/http://ta-nea.dolnet.gr/print_article.php?entypo=A&f=16666&m=N30&aa=1
               http://www.ekebi.gr/frontoffice/portal.asp?cpage=NODE&cnode=649
               </p>
        `;
    }
}