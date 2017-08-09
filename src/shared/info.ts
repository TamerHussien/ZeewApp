import {Order} from './order'
export interface homeFeedback {
    firstname: string;
    lastname: string;
    businsessname:string;
    address: string;
    building:string;
    telnum: number;
    email: string;
    agree: boolean;
    special: string;
    order: Order[];
};

export const ContactType = ['None', 'Tel', 'Email'];