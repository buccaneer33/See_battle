import BaseField from '../base_field';
class EnemyField extends BaseField {
    //вызываем консьруктор наследуемого класса
    super(); 
    //и переопределяем назначаемый класс
    this.classesList.push('enemy__field');
}
import default EnemyField