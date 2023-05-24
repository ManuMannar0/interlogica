/*FETCH*/
resp.json()
JSON.stringify(fromapi)

/*REST and SPREAD*/
const obj = [...originObj, ...newObj]
setFromapi({...json})
const {name, value} = el.target
const newObj = {[name]: value}

/*CUSTOM HOOKS*/
const useMyCustomHook = (string) => {
    const x = string.length
    const y = 'Hello '+string
    return {x, y}
}
const {x, y} = useMyCustomHook('Emanuele')

/*MULTYFUNCTION ARRAY*/
const arr1 = [
    {
      fn: (a, b) => <p>{a} + {b}: {a+b}</p>
    },
    //...
]
const arr2 = [
    function(a, b) {
      return a/b
    },
    //...
]

/*PROMISE*/
const myPromise = new Promise(
    (res, rej) => {
        if (condition) {
            res('res')
        } else {
            rej('rej')
        }
    },
)
myPromise
    .then(res => setResult(res))

/*LAZY*/
const LazyBigText = React.lazy(() => import('./BigText'))

/*HOC*/
const HighOrderComp = (Comp) => {
  return function HOC() {
    return (
      <div>
        <h1>HIGH ORDER COMPONENT</h1>
        <Comp sum={a+b} />
      </div>
    )
  }
}
const Comp = () => 'Ciao'
const Comp2 = HighOrderComp(5,5,Comp)
export default Comp2;

/*DYNAMIC IMPORT*/
const dynamicImport = (a,b) => {
  import('./library')
    .then(lib => setRes(lib.add(a,b)))
}

/*CONTEXT*/
import { createContext } from "react"
export const Data = createContext({})

import { Data } from './Context';
const [name, setName] = useState('NoName')
<Data.Provider value={{val1, val2, val3}}>
  <Comp1 />
  <Comp2 />
</Data.Provider>

const { name, dollar } = useContext(Data)
const { setName } = useContext(Data)