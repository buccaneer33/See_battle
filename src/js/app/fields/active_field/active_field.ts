import BaseField from '../base_field';
class ActiveField extends BaseField {
    //вызываем консьруктор наследуемого класса
    super(); 
    //и переопределяем назначаемый класс
    this.classesList.push('active__field');
}
import default ActiveField