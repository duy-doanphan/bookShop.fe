import './App.css'
import type {RootState} from './redux/store.ts'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from './redux/slices/counterSlice.ts'


function App() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
