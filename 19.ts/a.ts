export class Baby{
  _name:string;
  constructor(name:string){
    this._name = name
  }
  static smile(){

  }
  // private 私有方法 实例没办法访问 需要定义公共方法
  public getName():string{
    return this._name
  }
}

export let baby = new Baby('new')