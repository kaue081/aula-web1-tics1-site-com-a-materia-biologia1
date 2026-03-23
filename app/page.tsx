import Link from "next/link";

export default function Home() {
  return (
    // Container principal de toda a página
    <div className="bg-  ">

      {/* --- CABEÇALHO --- */}
      <div>
        <div>
          <h1 className="bg-                                               ">
            Meio Ambiente
          </h1>
          <p>
            <Link href="https://github.com/SEU-NOME/NOME-PROJETO.git">Repositório Github</Link>
          </p>
        </div>
      </div>

      {/* --- CONTEÚDO --- */}
      <div>

        {/* --- PRIMEIRO BLOCO --- */}
        <div>
          <h2>
            Integrantes da Equipe
          </h2>
          <ul>
            <li>Lorena Maria </li>
            <li>Erick Jose</li>
            <li>Jennifer Clarissa </li>
            <li className='text-bleu-100'>Charles Kaue</li>
          </ul>
        </div>

        {/* --- SEGUNDO BLOCO --- */}
        <div>
          <h2>
            Título do Tema Escolhido
          </h2>
          <img src=""
            alt="Descrição da imagem inserida" />
          <p>
            Aqui entra o texto descritivo sobre o projeto.
          </p>
        </div>
      </div>

      {/* --- RODAPÉ --- */}
      <div>
        <h3>
          Nome da Escola - Turma
        </h3>
      </div>

    </div>
  );
}
