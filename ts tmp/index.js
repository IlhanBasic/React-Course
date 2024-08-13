// type Person {
//     name:string,
//     age:number
// };
// let Ilhan:Person={
//     name:'Ilhan',
//     age:15
// };
// Ilhan.age=25;
// type a = {
//     tralala:number
// }
// type b = {
//     tralale:number
// }
// type c = a & b;
// let sta:c;
// const niz : (number|string | boolean | object) [] = [34,5342,1];
// if(typeof niz === 'object'){
var _User_city;
// let k1:Kompanija={
// }
// interface Korporacija extends Kompanija {
//     country:string 
// }  
// let K : Korporacija = {
//     naziv:"Edib",
//     profit:3000,
//     PIB:2,
//     uplatiPlatuRadniku(){
//         console.log('cao')
//     },
//     nekaFunkcija(id=4){
//         return '10';
//     },
//     country:"Serbia"
// }
// class User {
//     name:string;
//     email:string
//     constructor(n:string,e:string){
//         this.name=n;
//         this.email=e;
//     }
// }
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        _User_city.set(this, void 0);
    }
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
_User_city = new WeakMap();
