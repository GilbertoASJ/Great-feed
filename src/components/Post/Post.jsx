import styles from './Post.module.css'

export function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img 
                            src="https://github.com/GilbertoASJ.png" 
                            alt="Imagem de perfil do autor" 
                            className={styles.avatar}
                        />
                        <div className={styles.authorInfo}>
                            <strong>Gilberto Alves</strong>
                            <span>Desenvolvedor Web</span>
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