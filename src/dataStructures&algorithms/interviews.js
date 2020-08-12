export const interview = `
  Q: 自我介绍（你负责的业务线是什么？）
  A: （业务）对接寿险新渠道业务，属于平安 TSCT 战略中的 C，即 C 端平台，主要面向 C 端用户以及不同业务线（区拓、电销）的坐席、客户经理等
     A 端用户，包括产品、活动、权益福利、保单服务、资讯、AI 客服、直播等模块，其中首页等模块根据用户体系展示不同模块，A 端用户具有绑定
     用户关系、发放权益福利等功能。（区拓、电销、纯网）

     （技术）最初采用原生小程序的方式进行开发，由于团队基本是采用 react 技术栈的，后续进行了架构升级，采用 Taro 框架进行小程序的开发，
     目前逐步采用 hooks 进行开发，代码规范上采用 eslint、prettier、husky、lint-staged 进行代码开发、提交时的校验。对应小程序端，
     开发了一个运营管理系统，进行活动资金、资讯、 banner、二维码生成等功能的管理，采用 react 进行开发、rematch(useSelector + useMemo) 
     进行状态管理、后续采用 use-immer 简化代码 进行部分状态管理
     // 制定 JSON SCHEMA，采用 socket 进行 AI 语音的开发，

     （日常）除了代码开发，还会进行需求评审、code-review、架构优化等工作

  Q: typescript generic 作用
  A: 泛型变量、泛型类型、泛型类、泛型约束（T extends Lengthwise）

  对React看法，有没有遇到一些坑
  对闭包的看法，为什么要用闭包
  手写数组去重函数
  手写数组扁平化函数
  介绍下Promise的用途和性质
  Promise和Callback有什么区别
  React生命周期

  防抖和节流
  深拷贝
  数据扁平化
  单例模式
  数组去重
  手写 promise.all 和 promise.race
  实现 new
  实现 call、apply、bind
  Object.create()实现
  千分位分隔符
  实现三角形
  实现三栏、两栏布局

  性能的度量指标：performance.timeing
  深度优先、广度优先
  微前端原理


  下拉框单击空白消失
  window.addEventListener('click', function(event){
    const target = event.current.target
    // 怎么让 this 指向 target？？？
  })
`
