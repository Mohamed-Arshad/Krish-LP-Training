import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OwnerDocument = Owner & Document
@Schema()
export class Owner{
    // @Prop()
    // public id:string;
    @Prop()
    public firstname:string;
    @Prop()
    public lastname:string;
    @Prop()
    public icon:string;
    @Prop()
    public contactno:string;
    @Prop()
    public address:string;
}

export const ownerSchema= SchemaFactory.createForClass(Owner);