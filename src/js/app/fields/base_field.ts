class BaseField {
    constructor() {
        // размер поля (есть в обоих вариантах)
        this.size = '';
        //и определяем количество ячеек
        this.cells = '';
        // классы есть везде, или почти везде
        this.classesList = ['base__field'];
    }

    // создаем поле
    createDomElement(domElement) {
        domElement.innerHtml = `<div class=` + this.classesList.join('') + `>` + this.cells + `</div>`
    }
}
export default BaseField;