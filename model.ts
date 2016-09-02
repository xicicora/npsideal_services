/**
 * Created by Sharon.Xi on 9/1/2016.
 */
module Model {
    export interface Identifiable {
        id?: number;
    }

    export interface User extends Identifiable {
        firstname: string;
        lastname: string;
        age: number;
    }

    export interface IDeal{
        id: number;
        customerName: string;
        scenarioName: string;
        owner: string;
        createdDate: string;
        status: string;
        annualSales: number;
        mbiSales: number;
        fdgSales: number;
        oePercent: number;
        mpiReturnPercent: number;
        fdgReturnPercent: number;
    }
}