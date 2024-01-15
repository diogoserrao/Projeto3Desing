<script setup></script>

<template>
  <div class="corpo">
    <div class="texto">
      <div class="titulobaixo">Bem-Vindo à Revolução Verde!</div>
      <div class="assunto">
        Seja bem-vindo à nossa plataforma dedicada à reciclagem e à construção
        de um futuro mais sustentável. Aqui, acreditamos que cada pequena ação
        faz a diferença, e é por isso que estamos empenhados em tornar a
        reciclagem uma parte essencial do seu estilo de vida. Junte-se a nós
        nessa jornada para preservar o planeta e criar um ambiente mais saudável
        para as gerações futuras.
      </div>
    </div>
    <img class="imagem" src="/reciclagem.jpg" />
  </div>
  <div class="corpo">
    <div class="inicio">
      <div class="titulobaixo">Faça a Diferença com Poucos Passos Simples!</div>
      <div class="assunto center">
        Reciclar não precisa ser complicado. Com apenas alguns passos simples,
        você pode contribuir significativamente para a redução do impacto
        ambiental.
      </div>
      <div class="imagens">
        <div class="coluna">
          <img class="imagem" src="/imagem1.png" />
          <div>
            A primeira etapa é separar os resíduos de acordo com as categorias
            indicadas. Plástico, papel, vidro e metal - cada um tem seu próprio
            caminho para a renovação
          </div>
        </div>
        <div class="coluna">
          <img class="imagem" src="/imagem2.png" />
          <div>
            Encontre os pontos de reciclagem na sua área. Quanto mais acessíveis
            forem, mais fácil será adotar a reciclagem na sua rotina diária.
          </div>
        </div>
        <div class="coluna">
          <img class="imagem" src="/imagem3.jpeg" />
          <div>
            Participe em nossos programas educacionais para entender o impacto
            positivo da reciclagem no nosso ecossistema. Conhecimento é poder, e
            juntos podemos criar uma comunidade mais consciente.
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<style>
.texto {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 30px;
}

.titulobaixo {
  font-size: 40px;
  font-weight: bold;
}

.inicio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
}
.center {
  max-width: 800px;
}
.imagens {
  display: flex;
  gap: 20px;
}
.coluna {
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.imagem {
  width: 100%;
  height: 200px;
}


@media only screen and (max-width: 768px) {
  .imagens {
    flex-direction: column;
  }
  .coluna {
    width: 100%;
  }
}
</style>
