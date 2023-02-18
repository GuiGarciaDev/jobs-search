import styles from './styles.module.scss'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { JobData } from '../../types/dataType'

interface JobCardProps {
    job: JobData
}

// This component is responsible to render a card with the props passed by job object

export default function JobCard({ job } : JobCardProps) {
    return (
        <li className={styles.jobcard}>
            <div className={styles.title_company}>
                <span className={styles.title}>
                    {job.jobTitle}
                </span>
                <span>{`Company: ${job.companyName}`}</span>
                <span>{`Location: ${job.location}`}</span>
            </div>

            <div className={styles.description}>
                {job.OBJdesc}
            </div>

            <div className={styles.salary_time}>
                    { job.salary?.high
                        ? <span className={styles.salary}>
                            {`Salary interval: $${job.salary?.low.toLocaleString()} - $${job.salary?.high.toLocaleString()}`}
                        </span>
                        : 'Salary Interval: not defined by company'
                    }
                
                <span className={styles.time}>
                    {job.postedDate}
                </span>
            </div>

            <div className={styles.buttons_holder}>
                <button className={styles.icon_button}>
                    <BsThreeDotsVertical fontSize={24}/>
                </button>
                <button className={styles.view_button}>
                    View
                </button>
            </div>
        </li>
    )
}