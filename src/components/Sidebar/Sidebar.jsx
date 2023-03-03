import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img 
                    className={styles.cover}
                    src="https://images.unsplash.com/photo-1674640523521-74ed502e2b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40" 
                    alt="Imagem de fundo da capa"
                />
                <div className={styles.profile}>
                    <Avatar src="https://github.com/GilbertoASJ.png" />
                    <strong>Gilberto Alves</strong>
                    <span>Desenvolvedor Web</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>
    )
}