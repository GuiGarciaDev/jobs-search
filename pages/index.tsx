import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from '@/src/components/header/Header'
import Selector from '@/src/components/selector/Selector'
import { InferGetServerSidePropsType } from "next"
import JobCard from '@/src/components/job-card/JobCard'

import { JobData, Request } from '@/src/types/dataType'
import { useEffect, useState } from 'react'
import { companyNameOptions, postedDateOptions } from '@/src/utils/options'
import InputForm from '@/src/components/input-form/InputForm'
import { applyCompanyNameFilter, applyJobTitleFilter, applyPostedDateFilter, removeFilter } from '@/src/utils/filter'

export default function Home({ data } : InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [filteredData, setFilteredData] = useState<JobData[]>(data.jobs); // State to store all data filtered by some filter

  const [jobTitle, setJobTitle] = useState<string>(""); // Filter param - search for commpany name
  const [postedDate, setPostDate] = useState<string>("All"); // Filter param - filter by posted date
  const [companyName, setCompanyName] = useState<string>("All"); // Filter param - filter by company name

  console.log(filteredData);
  

  useEffect(() => { // When postedDate change, filter data.jobs 
    if (postedDate === 'All') {
      removeFilter(setFilteredData, data.jobs)
    } else {
      applyPostedDateFilter(setFilteredData, data.jobs, postedDate)
    }
  }, [postedDate])

  useEffect(() => { // When postedDate change, filter data.jobs 
    if (companyName === 'All') {
      removeFilter(setFilteredData, data.jobs)
    } else {
      applyCompanyNameFilter(setFilteredData, data.jobs, companyName)
    }
  }, [companyName])

  useEffect(() => {
    if (jobTitle === '') { // If jobName = default option, then remove filter and render all data. If not, apply filter
      removeFilter(setFilteredData, data.jobs)
    } else {
      applyJobTitleFilter(setFilteredData, data.jobs, jobTitle)
    }
  }, [jobTitle])

  return (
    <>
      <Head>
        <title>Jobs Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_mobile_white.png" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.main_content}>
          <div className={styles.selectors_holder}>
            <InputForm value={jobTitle} changeValue={setJobTitle} placeholder={'Search job...'}/>
             <Selector state={postedDate} changeState={setPostDate} options={postedDateOptions}/>
             <Selector state={companyName} changeState={setCompanyName} options={companyNameOptions}/>
          </div>
          <ul className={styles.cards_holder}>
            { filteredData.length > 0
                ? filteredData.map((job) => {return ( <JobCard job={job} key={job.jobId}/> )})
                : <span>No jobs found</span>
            } 
          </ul>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async () => { // SSR to get all jobs from API
  // Fetch data from zippia API (POST)
  const res = await fetch('https://www.zippia.com/api/jobs/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: `{
      "companySkills": true,
      "dismissedListingHashes": [],
      "fetchJobDesc": true,
      "jobTitle": "Business Analyst",
      "locations": [],
      "numJobs": 20,
      "previousListingHashes": []
    }`
  })

  const data: Request = await res.json()

  // Pass data to the Home component via props
  return { 
    props: { 
      data,
    } 
  }
}