import { Time } from "@angular/common";
export class Busentity
{
    busId:number;
    busName:String;
    busType:String;
    duration:String;
    arrivalTime:Time;
    depatureTime:Time;
    source:String;
    destination:String;
    fare : number;
    totalNumberOfSeats: number;
    dateOfTravel:Date;
}