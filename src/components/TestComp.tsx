import { createContext, useContext, useRef } from "react"

// THEORY: props drilling
// 1 useContext
// 2 прокидывать пропсы напрямую
// 3 useReducer
// 4 state management library: redux, zustand, mobX

const TestComp = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef}>
      <TestComp1
      />
    </div>
  )
}

export default TestComp

const TestComp1 = () => {

  return (
    <TestComp2
    />
  )
}

const TestComp2 = () => {

  const context = useContext(testContext)

  return (
    <div>
      {context.name1}
      {context.name2}
      {context.name3}
      {context.name4}
      {context.name5}
      {context.name6}
      {context.name7}
      {context.name8}
      {context.name9}
    </div>
  )
}


const payload = { name1: 'dsaf', name2: 'dsaf', name3: 'dsaf', name4: 'dsaf', name5: 'dsaf', name6: 'dsaf', name7: 'dsaf', name8: 'dsaf', name9: 'dsaf' }

const testContext = createContext<typeof payload>(payload)

const Test = () => {
  return (
    <testContext.Provider value={payload}>
      <TestComp1 />
    </testContext.Provider>
  )
}