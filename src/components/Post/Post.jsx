import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
import { Avatar } from '../Avatar/Avatar';

export function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src="https://github.com/diego3g.png" />
                        <div className={styles.authorInfo}>
                            <strong>Diego</strong>
                            <span>Instrutor</span>
                        </div>
                    </div>

                    <time title='27 de Janeiro às 09:26'>
                        Publicado há 1h
                    </time>
                </header>

                <div className={styles.content}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>
                        At quaerat tempore explicabo, voluptate asperiores aliquid totam dolor 
                        dicta sapiente veniam officia accusantium id hic eaque nisi dolorum alias animi!
                    </p> 
                    <p>-&gt; <a href="#">Doloribus?</a></p>
                    <p><a href="#">#lorem #ipsum #dolor_sit_amet</a></p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea placeholder='Deixe um comentário' />
                    <footer>
                        <button type='submit'>Comentar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </article>
        </>
    )
}