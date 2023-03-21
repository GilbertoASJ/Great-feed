// styles
import styles from './App.module.css';
import './global.css';

// components
import { Header } from "./components/Header/Header";
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

// Informações que variam de um post para outro:
// author: { avatar_url: '', name: '', role: '' }
// published_at: Date
// content: String

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/GilbertoASJ.png',
			name: 'Gilberto Alves',
			role: 'Web Dev'
		},
		content: [
			{type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
			{type: 'paragraph', content: 'At quaerat tempore explicabo, voluptate asperiores aliquid totam dolor'},
			{type: 'paragraph', content: 'dicta sapiente veniam officia accusantium id hic eaque nisi dolorum alias animi!'},
			{type: 'link', content: 'Doloribus!'}
		],
		publishedAt: new Date('2023-03-06 20:00:00')
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/diego3g.png',
			name: 'Diego Fernandes',
			role: 'Web Dev'
		},
		content: [
			{type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
			{type: 'paragraph', content: 'At quaerat tempore explicabo, voluptate asperiores aliquid totam dolor'},
			{type: 'paragraph', content: 'dicta sapiente veniam officia accusantium id hic eaque nisi dolorum alias animi!'},
			{type: 'link', content: 'Doloribus!'}
		],
		publishedAt: new Date('2023-03-01 20:00:00')
	},
]

function App() {

	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</>
	);
}

export default App;
