import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Works");
    }

    async getHtml() {
        return `
            <h1>Έργα του συγγρεφέα</h1>
            <p>Το Άξιον Εστί: https://el.wikipedia.org/wiki/%CE%A4%CE%BF_%CE%86%CE%BE%CE%B9%CE%BF%CE%BD_%CE%95%CF%83%CF%84%CE%AF_(%CF%80%CE%BF%CE%AF%CE%B7%CE%BC%CE%B1)
               Το Μονόγραμμα: http://photodentro.edu.gr/photodentro/elytis15_pidx0049890/
               Μαρία Νεφέλη: https://www.politeianet.gr/books/9789607233660-elutis-odusseas-nompel-1979-ikaros-maria-nefeli-197055
               Ο μικρός ναυτίλος: https://www.politeianet.gr/books/9789607233172-elutis-odusseas-nompel-1979-ikaros-o-mikros-nautilos-197058
               Τα ρω του έρωτα: https://www.dinfo.gr/%CE%BF%CE%B4%CF%85%CF%83%CF%83%CE%AD%CE%B1-%CE%B5%CE%BB%CF%8D%CF%84%CE%B7-%CF%84%CE%B1-%CF%81%CF%89-%CF%84%CE%BF%CF%85-%CE%AD%CF%81%CF%89%CF%84%CE%B1-%CE%AD%CE%BD%CE%B1-%CF%85%CF%80/
               </p>
        `;
    }
}