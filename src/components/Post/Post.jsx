import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Comentário teste :D',
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(e) {
        e.preventDefault();

        // Imutabilidade
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(e) {
        setNewCommentText(e.target.value)
    }

    function deleteComment(commentToDelete) {
        
        /*
            Imutabilidade -> As variáveis não sofrem mutação,
            nós criamos um novo valor (novo espaço na memória)
        */
        const commentsWithoutDeletedOne = comments.filter((comment) => {

            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={author.avatarUrl} />
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>

                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>
                </header>

                <div className={styles.content}>
                    {content.map((line) => {

                        if(line.type == 'paragraph') {

                            return <p key={line.content}>{line.content}</p>

                        } else if(line.type == 'link') {

                            return (
                                <p key={line.content}>
                                    <a href="#">{line.content}</a>
                                </p>
                            )
                        }
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                        value={newCommentText}
                        placeholder='Deixe um comentário' 
                        name='comment' 
                        onChange={handleNewCommentChange}
                    />
                    <footer>
                        <button type='submit'>Comentar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    ))}
                </div>
            </article>
        </>
    )
}