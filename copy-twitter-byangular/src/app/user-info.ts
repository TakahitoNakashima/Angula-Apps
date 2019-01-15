export class UserInfo {

  constructor(
    public id: number,
    public name: string,
    public image: string,
    public selfIntroduction: string,
    public birthday: number,
    public follow: number,
    public follower: number
  ) { }

}
