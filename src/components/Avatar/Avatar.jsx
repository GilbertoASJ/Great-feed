import styles from './Avatar.module.css'

// Utilizando a desestruturação, podemos passar valores defaulta para variáveis
export function Avatar({ hasBorder = true, src }) {

    /* const hasBorder = props.hasBorder !== false; */

    return (
        <>
            <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar}
                src={src} 
                alt="Foto de perfil"
            />
        </>
    )
}