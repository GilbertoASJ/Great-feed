import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return (
        <>
            <div className={styles.comment}>
                <img src="https://github.com/GilbertoASJ.png" />

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Gilberto Alves</strong>
                                <time title='27 de Janeiro às 09:26'>
                                    Cerca de 1h atrás
                                </time>
                            </div>
                            <button title="Deletar comentário">
                                <Trash size={20} />
                            </button>
                        </header>
                        <p>
                            Lorem ipsum dolor sit amet!!!!
                        </p>
                    </div>

                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}