import { Dispatch, SetStateAction } from "react"
import { JobData } from "../types/dataType"

export function removeFilter(setFilter : Dispatch<SetStateAction<any>>, defaultValue : JobData[]) {
    // Remove filter from filteredData in Home component
    setFilter(defaultValue)
}

export function applyJobTitleFilter(setFilter : Dispatch<SetStateAction<any>>, defaultValue : JobData[], param : string) {
    setFilter(defaultValue.filter(el => { return el.jobTitle.toUpperCase().includes(param.toUpperCase())}))
}

export function applyPostedDateFilter(setFilter : Dispatch<SetStateAction<any>>, defaultValue : JobData[], param : string) {
    let array: any[] = []
    defaultValue.map(el => {
        const postedDate = el.postingDate.slice(0, 10).replace(/[-]/g, '/') // Transform date got in the api (2023-02-17) to (2023/02/17)
        const diff = Math.abs(new Date().getTime() - new Date(postedDate).getTime()) // Using this transformation to get the difference of those days
        const daysDiff = Math.floor(diff / 1000 / 60 / 60 / 24) // Converting the days difference in ms to days
        
        if (daysDiff < +param) { // Diference in days of current day and posting date
            array.push(el)
        }

        setFilter(array)
    })
}

export function applyCompanyNameFilter(setFilter : Dispatch<SetStateAction<any>>, defaultValue : JobData[], param : string) {
    setFilter(defaultValue.filter(el => { return el.companyName === param}))
}