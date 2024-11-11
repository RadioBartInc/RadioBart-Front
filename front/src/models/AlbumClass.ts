export class Album {
    constructor(
      public id: string,
      public title: string,
      public artist: string,
      public fecha: Date,
      public genre: string,
      public reviews: string[],
      public cover: string
    ) {}

    toAPIFormat() {
      return {
        title: this.title,
        artist: this.artist,
        fecha: this.fecha,
        genre: this.genre,
        reviews: this.reviews,
        cover: this.cover
      };
    }
}
  