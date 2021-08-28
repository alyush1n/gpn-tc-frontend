import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from "./reducers";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        console.log('Error get state', err)
        return undefined
    }
}

const store = createStore(
    reducers,
    {
        // LocalGoods: loadState()?.goods,
        // History: loadState()?.history,
        // Lists: loadState()?.lists,
        // SelectedItems: loadState()?.selectedItems,
    },
    applyMiddleware(thunk, logger),
)

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch {
        // ignore write errors
    }
}

// store.subscribe(() => {
//     saveState({
//         goods: store.getState().LocalGoods,
//         history: store.getState().History,
//         lists: store.getState().Lists,
//         selectedItems: store.getState().SelectedItems,
//     })
// })

export default store
