import {IsNotEmpty} from 'class-validator';
export class createOwnerDto{
    @IsNotEmpty()
    public firstname:string;
    @IsNotEmpty()
    public lastname:string;
    public icon:string;
    @IsNotEmpty()
    public contactno:string;
    @IsNotEmpty()
    public address:string;
}