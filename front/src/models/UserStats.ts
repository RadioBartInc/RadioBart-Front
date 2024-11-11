export class UserStats {
    reviewCount: number;
    averageRating: number | null;
    totalLikes: number;

    constructor(reviewCount: number, averageRating: number | null, totalLikes: number) {
        this.reviewCount = reviewCount;
        this.averageRating = averageRating;
        this.totalLikes = totalLikes;
    }
}