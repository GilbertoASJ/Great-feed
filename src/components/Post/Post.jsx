import styles from './Post.module.css'

export function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img 
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100" 
                            alt="Imagem de perfil do autor" 
                            className={styles.avatar}
                        />
                        <div className={author.info}>
                            <strong>Josy Ferreira</strong>
                            <span>Publicitária</span>
                        </div>
                    </div>

                    <time title='27 de Janeiro às 09:26'>
                        Publicado há 1h
                    </time>
                </header>
                <div className={styles.content}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>
                        At quaerat tempore explicabo, voluptate asperiores aliquid totam dolor dicta sapiente veniam officia accusantium id hic eaque nisi dolorum alias animi!
                    </p> 
                    <p>-&gt; <a href="#">Doloribus?</a></p>
                    <p><a href="#">#lorem #ipsum #dolor_sit_amet</a></p>
                </div>
            </article>
        </>
    )
}