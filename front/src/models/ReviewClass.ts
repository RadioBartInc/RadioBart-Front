export class Review {
    constructor(
      public id: string,
      public userId: string,
      public ratingScore: number,
      public content: string,
      public fecha: Date,
      public likes: number
    ) {}
  }
  