// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции - конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.



const Account = function (login, email) {
    this.login = login,
        this.email = email,
        
};

Account.prototype.getInfo = function (guestInfo) {
    console.log(`Login:  ${this.login}, Email: ${this.email}`);
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
const poly = new Account('Poly', 'poly@mail.com');

mango.getInfo();
poly.getInfo();  