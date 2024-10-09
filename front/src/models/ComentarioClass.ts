export class Comentario {
    constructor(
        public id: string,
        public content: string,
        public user: string,
        public fecha: Date,
        public reviewId: string
    ) {}

    toAPIFormat() {
        return {
            review: this.reviewId,
            comment: this.content,
            user: this.user,
            date: this.fecha.toISOString()
        };
    }
}