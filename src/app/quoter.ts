export class Quoter {
    expandCard: boolean;
    public upvotes:number
    public downvotes:number
    public contemporaryDate:Date
    constructor(public title:string, public name:string, public author:string, public quote:string){
        this.upvotes = 0
        this.downvotes = 0
        this.contemporaryDate = new Date()
        this.expandCard=false;
    }
}
