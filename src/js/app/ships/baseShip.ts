import ShipCell from '../cells/ship_cell'
class BaseShip {
    constructor() {
        // размер кораблика (есть в обоих вариантах)
        this.size = '';
        //и определяем тип ячеек
        this.cells = ShipCell();

    }

}
export default BaseShip;