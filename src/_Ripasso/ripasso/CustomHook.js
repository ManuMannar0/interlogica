export const useMyCustomHook = (a,b) => {
    const add = () => a+b
    const multy = () => a*b
    return {add, multy}
}
export const moreHundred = (a,b) => {
    return a+100
}