import styles from "./styles.module.css";
  
// Importe as fotos dos comentaristas fixos
import fotoComentarista1 from "../../assets/felyppe.jpg"
import fotoComentarista2 from "../../assets/mellany.jpg"
import fotoComentarista3 from "../../assets/jessy.jpg"



export default function ComentariosFixo() {
  return (
    
    <div className={styles.comentarios}>
      
      
      <div className={styles.comentarioCaixa}>
        <img
          src={fotoComentarista1}
          className={styles.comentarioFoto}
        />
        <div className={styles.comentario}>
          <span className={styles.comentarioNome}>Felyppe Nunes</span>
          <p className={styles.comentarioData}>Cerca de 2h</p>
          <p className={styles.comentarioTexto}>
            Est aspernatur quis eos natus dicta et internos
          </p>
        </div>
      </div>

      
      <div className={styles.comentarioCaixa}>
        <img
          src={fotoComentarista2}
          className={styles.comentarioFoto}
        />
        <div className={styles.comentario}>
          <span className={styles.comentarioNome}>Mellany Carter</span>
          <p className={styles.comentarioData}>Cerca de 2h</p>
          <p className={styles.comentarioTexto}>
            Est aspernatur quis eos natus dicta et internos
          </p>
        </div>
      </div>
      
        <div className={styles.comentarioCaixa}>
        <img
          src={fotoComentarista3}
          className={styles.comentarioFoto}
        />
        <div className={styles.comentario}>
          <span className={styles.comentarioNome}>Jessy Logan</span>
          <p className={styles.comentarioData}>Cerca de 2h</p>
          <p className={styles.comentarioTexto}>
            Est aspernatur quis eos natus dicta et internos

          </p>
        </div>
      </div>

    </div>
  );
}