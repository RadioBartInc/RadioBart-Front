export function getRatingClass(rating: number): string {
    if (rating >= 80) return 'good_rating';
    if (rating >= 50) return 'regular_rating';
    return 'bad_rating';
}