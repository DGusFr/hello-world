import styles from './Post.module.css';

//A função retorna um elemento React que representa um componente de postagem
//A imagem é definida com a propriedade "src" que carrega uma imagem de capa do post com base no "id"
export default function Post({ post }) {
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do post"
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}