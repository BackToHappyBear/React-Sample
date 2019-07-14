import { useEffect, useRef } from 'react'

export default function usePrevious(value) {
  // NOTE: useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
  //       返回的 ref 对象在组件的整个生命周期内保持不变。

  // NOTE: 请记住，当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。
  //       如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。

  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}
