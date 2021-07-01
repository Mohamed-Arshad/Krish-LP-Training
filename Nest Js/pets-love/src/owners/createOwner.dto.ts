import {IsNotEmpty} from 'class-validator';
export class createOwnerDto{
    @IsNotEmpty()
    public firstname:String;
    @IsNotEmpty()
    public lastname:String;
    public icon:String;
    @IsNotEmpty()
    public contactno:String;
    @IsNotEmpty()
    public address:String;
}