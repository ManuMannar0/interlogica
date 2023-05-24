/**
 * Contex
 * Hook
 * Code Splitting (Dynamic import, React.lazy)
 */

import React, { createContext, useContext, useEffect, useState } from "react"
import { useMyCustomHook } from "./CustomHook"
const LazyComp = React.lazy(() => import('./VeryLargeOptionalComponentByUser'))

const MyDataState = createContext({})

const HighOrderComp = (s1,s2,Component) => {
    return function HOC() {
        return(
            <div style={{border: '1px solid blue'}}>
                <span>HOC</span>
                <Component res={s1+s2}/>
            </div>
        )
    }
}
const Comp1PerHOC = ({res}) => {
    const {mystate} = useContext(MyDataState)
    return(
        <>
            <h1>{mystate}</h1>
            <h1>{res}</h1>
        </>
    )
}
const Comp2PerHOC = ({res}) => {
    const {mystate} = useContext(MyDataState)
    return(
        <>
            <h1>{mystate}</h1>
            <h1>{res}</h1>
        </>
    )
}
const Comp1 = HighOrderComp('prima parte + ','seconda parte - Comp1',Comp1PerHOC)
const Comp2 = HighOrderComp('prima parte + ','seconda parte - Comp2',Comp2PerHOC)

const App = () => {
    const [mystate, setMystate] = useState('Eccomi')
    const {add, multy} = useMyCustomHook(3,3)
    useEffect(
        () => {
            setMystate(add())
        }, []
    )  
    return(
        <>
            {/* Context Start */}
            <MyDataState.Provider value={{mystate, setMystate}} >
                <Comp1 />
                <Comp2 />
            </MyDataState.Provider>
            {/* Context End */}

            {/* Code Splitting Start*/}
            <button onClick={() => {
                import('./lib')
                    .then(lib => setMystate(lib.moreHundred(10)))
            }}>moreHundred</button>
            <LazyComp />
            {/* Code Splitting End */}
        </>
    )
}

export default App