import styles from './styles.module.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import Image from 'next/image'
import logo from '@/public/zippia_logo.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_contents}>
                <Image 
                    src={logo}
                    width={152} 
                    height={36} 
                    alt={'Company logo'} 
                />
                <div className={styles.buttons_holder}>
                    <div>
                        <button>JOBS</button>
                        <button>CARRERS</button>
                        <button>POST JOB</button>
                    </div>
                    <button className={styles.signin}>SIGN IN</button>
                    <button className={styles.toggle}><RxHamburgerMenu fontSize={24}/></button>
                </div>
            </div>
        </div>
    )
}