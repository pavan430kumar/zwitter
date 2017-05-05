import { Like } from './like';
export class Zweet {
    /**
     *
     */
    // constructor(public text: string, public user: string, public likes: number = 0, public createdOn: string = (new Date).toString() ) {
    // }
    constructor(public text: string, public user: string, public likes: Like[] = new Array(), public createdOn: string = (new Date).toString() ) {
    }
}
