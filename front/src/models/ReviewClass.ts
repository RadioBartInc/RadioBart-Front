export class Review {
    constructor(
      public id: string,
      public userId: string,
      public ratingScore: number,
      public content: string,
      public fecha: Date,
      public likes: number,
      public albumId: string,
      public comentarios: string[]
    ) {}
  
    toAPIFormat() {
      return {
        album: this.albumId,    // Matches the expected attribute name for album
        rating: this.ratingScore,
        review: this.content,
        user: this.userId,
        date: this.fecha.toISOString(), // Convert Date object to ISO string
        comments: this.comentarios,
        likes: this.likes
      };
    }
}


  