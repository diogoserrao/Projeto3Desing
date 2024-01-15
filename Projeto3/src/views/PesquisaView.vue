<script setup>
import { ref, computed } from "vue";
const pesquisa = ref("")
const artigos = ref([
  {
    title: "Como Iniciar sua Jornada Sustentável em 5 Passos Simples",
    text: "Descubra maneiras práticas de integrar a sustentabilidade ao seu dia a dia com nosso guia de cinco passos. Desde a reciclagem até escolhas conscientes, este artigo é seu ponto de partida para uma vida mais verde.",
  },
  {
    title: "O Impacto Positivo da Reciclagem: Além da Redução de Resíduos",
    text: "Explore as ramificações ambientais e sociais da reciclagem. Vamos além da simples redução de resíduos, explorando como cada item reciclado contribui para a preservação dos recursos naturais e a criação de empregos sustentáveis.",
  },
  {
    title: "Sustentabilidade na Cidade: Como Tornar Metrópoles Mais Amigáveis ao Meio Ambiente",
    text: "Investigamos práticas inovadoras e acessíveis para tornar as cidades mais verdes. Desde iniciativas comunitárias até soluções urbanas inteligentes, descubra como podemos transformar nossos centros urbanos em ambientes mais sustentáveis.",
  },
  {
    title: "Desafios Mensais de Reciclagem: Uma Maneira Divertida de Fazer a Diferença",
    text: "Participe da nossa proposta de desafios mensais de reciclagem! Este artigo detalha como pequenas competições e recompensas podem transformar a reciclagem em um hábito empolgante e socialmente engajado.",
  },
  {
    title: "O Papel do Consumidor na Economia Circular",
    text: "Explore como os consumidores desempenham um papel crucial na transição para uma economia circular. Descubra como suas escolhas de compra podem influenciar as práticas empresariais e promover um ciclo mais sustentável de produção e consumo.",
  },

]);

const filtrarArtigos = computed(() => {
    if(pesquisa.value === ""){
        return artigos.value
    }
    return artigos.value.filter((artigo) => {
        if (artigo.title.toLowerCase().includes(pesquisa.value.toLowerCase()) || (artigo.text.toLowerCase().includes(pesquisa.value.toLowerCase()))){
            return true
        }       
    })
})
</script>

<template>
    <div>
        <input placeholder="Pesquisar no Site" class="input" v-model="pesquisa">
        <div class="espacamento">
            <article class="formatacao" v-for="artigo in filtrarArtigos"> 
                <h2 class="titulo">{{ artigo.title }}</h2>
                <p class="texto">{{ artigo.text }}</p>
            </article>
        </div>
    </div>
</template>
<style scoped>
input{
    width: 100%;
}
.espacamento{
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 30px;
    padding: 40px;
    
}
.titulo{
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
}

</style>
