export class Comentario {
    constructor(
        public id: string,
        public usuarioId: string,
        public reviewId: string,
        public contenido: string
    ) {}
}