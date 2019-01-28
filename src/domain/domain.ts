
export interface ICart {
    item: IItem;
}

export interface IItem {
    name: string;
    quantity: number;
    cost: number;
}

export class Command {
    public payload: object;
    public userId: string;

    constructor(payload: object, userId: string) {
        this.payload = payload;
        this.userId = userId;
    }
}

// export interface ICommandRequest {
//     name: string;
//     payload: object;
//     userId: string;
// }
