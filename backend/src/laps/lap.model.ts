export class Lap {
  constructor(
    public id: number,
    public DateStart: string,
    public DateEnd: string,
    public FormattedTime: string,
    public seconds: number,
  ) {}
}
