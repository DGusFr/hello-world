import styles from './Inicio.module.css';

import posts from 'json/posts.json';
import Post from "componentes/Post";

//parte responsavél por gerar a aba post no inicio
export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    )
}