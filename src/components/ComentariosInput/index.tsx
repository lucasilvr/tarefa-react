import { useState } from "react";
import styles from "./styles.module.css";
import minhaFoto from "../../assets/lucas.jpg";

export default function ComentariosInput() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (comentario.trim() === "") {
      return;
    }
    setComentarios((anteriores) => [...anteriores, comentario]);
    setComentario("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.comentarioBox}>
        <p className={styles.comentariosTitulo}>Deixe seu Feedback</p>
        <input
          type="text"
          placeholder="Escreva um comentário..."
          className={styles.inputComentario}
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button type="submit" className={styles.btnComentar}>
          Comentar
        </button>
      </form>

      <div className={styles.comentarios}>
        {comentarios.map((c, i) => (
          <div key={i} className={styles.comentarioCaixa}>
            <img
              src={minhaFoto}
              alt="minha foto"
              className={styles.comentarioFoto}
            />
            <div className={styles.comentario}>
              <span className={styles.comentarioNome}>Lucas Silveira</span>
              <p className={styles.comentarioData}>há 1 minuto</p>
              <p className={styles.comentarioTexto}>{c}</p>
            </div>
          </div>
          
        ))}
      </div>
    </>
  );
}
