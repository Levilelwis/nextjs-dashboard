export default function RenderingDemo() {
  return (
    <div style={{ marginTop: 40, padding: 20, background: "#f9fafb" }}>
      <h2>⚙️ Renderização no Next.js</h2>

      <div style={{ marginTop: 20 }}>
        <h3>🟢 Estática</h3>
        <p>
          Dados gerados uma vez e reutilizados (rápido e leve).
        </p>
        <ul>
          <li>Alta performance</li>
          <li>Cache automático</li>
          <li>Não muda sozinho</li>
        </ul>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>🔵 Dinâmica</h3>
        <p>
          Dados buscados a cada requisição do usuário.
        </p>
        <ul>
          <li>Dados sempre atualizados</li>
          <li>Mais lento que estático</li>
          <li>Mais custo de servidor</li>
        </ul>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>🚫 no-store</h3>
        <p>
          Força o Next.js a nunca usar cache e sempre buscar dados novos.
        </p>
        <ul>
          <li>Sem cache</li>
          <li>Atualização em tempo real</li>
          <li>Mais requisições ao servidor</li>
        </ul>
      </div>
    </div>
  );
}