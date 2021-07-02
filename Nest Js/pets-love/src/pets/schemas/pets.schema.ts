import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type PetDocument =Pet & Document;

@Schema()
export class Pet{
    // @Prop()
    // public id:string;
    @Prop()
    public petname:string;
    @Prop()
    public pettype:string;
    @Prop()
    public icon:string;
    @Prop()
    public description:string;
    @Prop()
    public amount:number;
}

export const PetSchema=SchemaFactory.createForClass(Pet);