export class User {
    constructor(
      public id: string,
      public name: string,
      public password: string,
      public profile_picture: string,
      public role: boolean,
      public admin_secret?: string
    ) {}
    
    toAPIFormat() {
      return {
        username: this.name,
        password: this.password,
        picture: this.profile_picture
      };
    }

    static fromObject(obj: any): User | null { 
      if (this.isUser(obj)){
        return new User( obj.id, obj.name, obj.password, obj.profile_picture, obj.role); 
      }

      return null
    }

    static isUser(obj: any): obj is User {
      return obj.id !== undefined && 
        obj.name !== undefined && 
        obj.password !== undefined && 
        obj.profile_picture !== undefined &&
        obj.role !== undefined;
    }
}
  