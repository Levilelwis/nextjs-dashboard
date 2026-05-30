export const renderingInfo = {
  static: {
    title: "Renderização Estática",
    description:
      "Os dados são gerados no build e podem ser cacheados pelo Next.js.",
    advantages: ["Muito rápida", "Menos requisições", "Baixo custo"],
    disadvantages: ["Não atualiza automaticamente"],
  },

  dynamic: {
    title: "Renderização Dinâmica",
    description:
      "Os dados são buscados a cada requisição do usuário.",
    advantages: ["Sempre atualizado"],
    disadvantages: ["Mais lento", "Mais custo de servidor"],
  },

  noStore: {
    title: "Cache no-store",
    description:
      "Força o Next.js a NÃO armazenar cache e buscar dados sempre atualizados.",
  },
};