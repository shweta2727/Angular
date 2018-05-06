export class Employee{
    id :number;
    name :string;
    phone :string;
    address : Array<{city:string, address_line1:string, address_line2:string, postal_code:string}> 
}