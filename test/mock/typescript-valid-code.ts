export default class RgbAnalyzer {
  public hoge: string[] = ['']
  public hogege: string[] = ['']
  protected static moga: number
  protected mogaga: string = ''
  private static fuga: number
  private fugaga: string = ''

  constructor (params: {hoge: string[]}) {
    this.hoge = params.hoge;
  }

  public set setRgbs(hoge: string[]) {
    this.hoge = hoge
  }

  public get getRgbs() {
    return this.hoge
  }

}
