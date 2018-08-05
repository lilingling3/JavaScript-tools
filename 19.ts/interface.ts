interface Db {
  host: string
  port: number | string // | 或者string类型
  d(): void
}

class Mysql implements Db {
  host: string;
  port: number;
  constructor() {}
  connect() {
    console.log(`连接${this.host}=>${this.port}`)
  }
  d() {}
}

