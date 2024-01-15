<template>
  <div class="corpo">
    <div class="formato">
      <h1 class="numero">404</h1>
      <div>Pagina não encontrada</div>
      <a href="/" class="botao">Pagina Inicial</a>
    </div>
    <div class="direita">
      <img class="imagem" src="/erro.png" />
    </div>
  </div>
</template>

<style scoped>
.formato {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;
  align-items: center;
  justify-content: center;
}
.direita {
  width: 50%;
}
.imagem {
  width: 100%;
}
.numero {
  font-size: 40px;
  font-weight: bold;
}
</style>
