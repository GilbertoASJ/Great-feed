import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        console.log('deletar')

        onDeleteComment(content)
    }

    return (
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src="https://github.com/GilbertoASJ.png" />

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Gilberto Alves</strong>
                                <time title='27 de Janeiro às 09:26'>
                                    Cerca de 1h atrás
                                </time>
                            </div>
                            <button onClick={handleDeleteComment} title="Deletar comentário">
                                <Trash size={24} />
                            </button>
                        </header>
                        <p>
                            {content}
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