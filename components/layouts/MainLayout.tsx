
import { FC, PropsWithChildren } from 'react'
import Head  from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

interface Props extends PropsWithChildren {
    title?: string;
};

export const MainLayout: FC<Props> = ({ title, children }) => {

    return (
        <div className={styles.container}>
            <Head>
                <title>{title || 'Edderson App'} </title>
                <meta name="description" content="contact page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className={styles.main}>
             {children}
            </main>
        </div>

    )
}

