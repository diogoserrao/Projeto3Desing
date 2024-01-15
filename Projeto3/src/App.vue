<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="tudo">
    <div class="cabecalho">
      <div class="esquerda">
        <a href="/" class="titulo">ECO-ESCOLAS</a>
        <div>Como Reciclar</div>
        <div>Beneficios</div>
      </div>
      <div class="direita">
        <a href="/login" class="login">Login</a>
        <a href="/registar" class="botao">Registar</a>
      </div>
    </div>
    <RouterView />
    <div class="corpo">
    <div class="rodapeesquerda">
      <div class="titulo eco">ECO-ESCOLAS</div>
      <div class="ajude">
        <div>Ajude</div>
        <div class="juntesse">Junte-se a nós</div>
        <div>
          Fique conectado conosco e faça parte da mudança. Juntos, podemos criar
          um impacto positivo.
        </div>
      </div>
    </div>
    <div class="rodapedireita">
      <div class="siganos">
        <div>Siga-nos:</div>
        <div>Facebook</div>
        <div>Instagram</div>
      </div>
      <div class="contacto">
        <div>contacto</div>
        <div>info@reciclagemverde.com</div>
        <div>291 900 000</div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.tudo {
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 40px;
}
.cabecalho {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
}
.titulo {
  font-weight: bold;
}
.esquerda {
  display: flex;
  gap: 20px;
}
.direita {
  display: flex;
  gap: 20px;
}

.login {
  padding: 4px 10px;
}
.rodape {
  display: flex;
  background-color: #f2f2f2;
  padding: 40px;
  gap: 40px;
}
.eco {
  width: 200px;
  font-weight: bold;
}

.rodapeesquerda {
  display: flex;
  gap: 30px;
}
.rodapedireita {
  display: flex;
  gap: 40px;
}
.ajude {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.juntesse {
  font-size: 20px;
}
.contacto {
  gap: 50px;
}
@media only screen and (max-width: 768px) {
.cabecalho{
    flex-direction: column;
    gap: 20px;
    align-items: center;
}
}

</style>
