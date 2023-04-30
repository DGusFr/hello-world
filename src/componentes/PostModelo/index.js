import styles from './PostModelo.module.css';

//Este modelo de postagem é utilizado em uma aplicação React para exibir vários posts em um site, 
//onde os valores dos parâmetros seriam substituídos por valores específicos de cada postagem.
export default function PostModelo({ children, fotoCapa, titulo }) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}