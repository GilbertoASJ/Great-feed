import styles from './Header.module.css';
import greatLogo from '../../assets/great-logo.png';

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={greatLogo} alt="Logo do Great Feed" />
                <strong>Great feed</strong>
            </header>
        </>
    )
}