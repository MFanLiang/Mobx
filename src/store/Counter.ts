import { observable, action, makeObservable } from "mobx";

class Counter {
  constructor() {
    /**
   * Mobx@6版本中makeObservable的作用是创建可观察状态，其用法如下：
   * 参数1：target把指定的参数变成响应式参数（可观察）
   * 参数2：指定哪些属性或者方法变成可观察参数
   */
    makeObservable(this, {
      count: observable
    })
  }

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  get double() {
    return this.count * 2;
  }
}

const counter = new Counter();

export default counter;