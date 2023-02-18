import styles from './styles.module.scss'
import { Dispatch, SetStateAction, FormEvent, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'

interface InputFormProps {
    changeValue: Dispatch<SetStateAction<string>> // Set input value to the external state
    value: string // Get the external state and display as input value
    placeholder: string // Placeholder of input
}

// This component is controled by an external state (useState hook)

export default function InputForm({ changeValue, value, placeholder } : InputFormProps) {
    return (
        <div className={styles.inputform}>
            <label htmlFor="searchbar">
                <IoMdSearch fontSize={20}/>
            </label>
            <input
                value={value}
                onChange={(e) => changeValue(e.target.value)}
                id="searchbar"
                type="text"
                placeholder={placeholder}
            ></input>
        </div>
    )
}