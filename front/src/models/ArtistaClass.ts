export class Artista {
    constructor(
      public id: string,
      public name: string,
      public albums: string[],
      public foto: string
    ) {}
    toAPIFormat() {
      return {
        name: this.name,
        albums: this.albums,
        picture: this.foto
      };
    }
  }
  