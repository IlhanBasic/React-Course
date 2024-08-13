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

// }
// niz.push('e');
// let PI : 3.14 = 3.14;
// const SI = 3.14;
// const nekiJadi:[string,boolean] = ['cao',true];
// nekiJadi.push('true');
// enum Nabrajanje {
//     prvo=100,
//     drugo='d',
//     trece=1300
// }
// let broj : Nabrajanje.drugo;
// interface Kompanija {
//     naziv:string,
//     profit?:number,
//     readonly PIB:number,
//     uplatiPlatuRadniku():void,
//     nekaFunkcija(id:number):string
// }
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
// class User {
//     #city:string
//     constructor(
//         public name:string,
//         public email:string,
        
//     ){}
//     get getName(){
//         return this.name;
//     }
//     set setName(value:string){
//         this.name = value;
//     }
// }
// interface TakePhoto{
//     filter:boolean,
//     zoom:number
// }
// interface Story{
//     date:Date,
//     location?:Navigator
//     createStory():void
// }
// class Instagram implements TakePhoto,Story{
//     filter: boolean;
//     zoom: number;
//     date: Date;
//     location?: Navigator | undefined;
//     constructor(f:boolean,z:number,d:Date,l:Navigator){
//         this.filter=f;
//         this.date=d;
//         this.zoom=z;
//         this.location=l
//     }
//     createStory(): void {
//         console.log("Slikasmo te");
//     }
// }
// const slikaInstagram = new Instagram(true,1,new Date(),new Navigator());
// console.log(`${}`);
// abstract class Igrica {
//     score:number;
//     player:string;
//     isEnd:boolean;
//     //nema konstruktora
//     abstract igraj():void
    
// }
// class GTA6 extends Igrica{
//     igraj(): void {
//         console.log("EVO GA GTA 6 konacno!")
//     }
//     constructor(
//         public score:number,public player:string,isEnd:boolean
//     ){super()}

// }
// const l = new GTA6(100,'Ilhan',false);
// function zamisliZelju<T>(zelja:T):T{
//     return zelja;
// }
// function sortirajNiz<T>(niz:T[]):T[]{
//     return niz.sort(()=>Math.random()-0.5)
// }   
// sortirajNiz(['n','d','a']);
// class Prodavnica<T>{
//     product:T[];
//     location:string;
//     profit:number;
//     constructor(p:T[],l:string,pr:number){
//         this.product=p;
//         this.location=l;
//         this.profit=pr;
//     }
// }

// interface Fakultet{
//     brStudenata:number
//     brProfesora?:number
// }
// class UNIVERZITET{
//     t:number
// }
// class FAKS extends UNIVERZITET{
//     constructor(){
//         super()
//     }
// }
// const faks : Fakultet = {
//     brStudenata:4000
// };
// if("brStudenata" in faks){
//     console.log("Nesto")
// }
// let items:number[] = [34,3463,634654,465,34]
// for(let i in items){
//     console.log(`${i}`)
// }