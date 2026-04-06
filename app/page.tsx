import Link from "next/link";

export default function Home() {
  return (
    // Container principal de toda a página
    <div className="bg-[#F5F2E9]  ">

      {/* --- CABEÇALHO --- */}
      <div>
        <div className ="pt-6">
          <h1 className="bg-[#704214] text-white   text-center rounded mr-70 ml-70 h-7 font-bold t-5                                               ">
            Nomenclatura Binomial de Lineu 
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
