import { IsNotEmpty, IsNumber } from "class-validator";

export class createPetDto{
    @IsNotEmpty()
    public petname:String;
    @IsNotEmpty()
    public pettype:String;
    public icon:String;
    @IsNotEmpty()
    public description:String;
    @IsNotEmpty()
    @IsNumber()
    public amount:number;
}