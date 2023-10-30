import styles from './Header.module.css'

export type HeaderProps = {
    title: string
}

export const Header = ({title}: HeaderProps)=> {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
        </div>
    )
}