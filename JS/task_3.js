Напиши класс Storage, который будет создавать объекты для управления складом товаров.При вызове будет получать один аргумент -
начальный массив товаров, и записывать его в свойство items.

Добавь методы класса:

getItems() - возвращает массив текущих товаров
addItem(item) - получает новый товар и добавляет его к текущим
removeItem(item) - получет товар и, если он есть, удаляет его из текущих

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);


class Storage { 

  constructor(items) {

    this.items = items
  }

  getItems(){
    console.log(`${this.items}`);  
    
  }
  addItem(item) {
  console.log(this.items.push.item);
}

  removeItem(item) {

    for (let el of items) {
      if (item = el) {
        items.splice(el[i], 1);
      }
     }
  }

}




const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]