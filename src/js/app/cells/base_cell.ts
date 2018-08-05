class BaseCell {
    constructor() {
        //
        this.cellPosition;
        // класс
        this.classesList = ['cell'];
    }
    // клик есть везде
    clickBtn() { }

    // создавать кнопки надо в любом случае
    createDomElement(domElement) {
        domElement.innerHtml = `<div cell-pos = "`+ this.cellPosition +`" class=”` + this.classesList.join('') + `”></div>`
    }
}
export default BaseCell