import styles from './styles.module.scss'
import { Dispatch, SetStateAction } from 'react'

interface SelectorProps {
    state: string, // Current state
    changeState: Dispatch<SetStateAction<any>> // State changer
    options: options[] // Array of option to render
}

interface options { // Each option should have it to render
    value: string,
    text: string,
}

// This component is a custom <selector> element
// You can control it by using a useState hook and 
// passing an array of object to ger render as <options>
// Look to the interface option to see details of types

export default function Selector({ state, changeState, options } : SelectorProps) { 
    return (
        <label className={state === 'All' ? styles.selector : styles.selector_active} htmlFor='regions'>
            <form id='regions'>
                <select 
                    name="regions" 
                    id="regions" 
                    onChange={(e) => {changeState(typeof state === 'string' ? e.target.value : +e.target.value)}} 
                    defaultValue={"All"}
                >
                    { options.map(option => {
                        return (
                            <option value={option.value} key={option.text}>{option.text}</option>
                        )
                    }) }
                </select>
            </form>
        </label>
    )
}