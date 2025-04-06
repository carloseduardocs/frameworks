<template>
  <!-- Componente principal da aplicação (barra de navegação, conteúdo e rodapé) -->
  <v-app>
    <!-- Barra de navegação no topo da página -->
    <v-app-bar app color="primary" dark>
      <!-- Logo de navegação, agora clicável e alinhado à esquerda -->
      <router-link to="/" class="logo-link">
        <v-img :src="logo" alt="Logo" width="180" height="100" class="mr-5" contain></v-img>
      </router-link>

      <v-spacer></v-spacer> <!-- Espaço para separar os itens -->

      <!-- Botões de navegação para as diferentes páginas -->
      <v-btn to="/" text>Home</v-btn> <!-- Botão para a página inicial -->
      <v-btn to="/catalog" text>Catálogo</v-btn> <!-- Botão para a página de catálogo -->
      <v-btn to="/planner" text>Planejador</v-btn> <!-- Botão para o planejador de aquário -->
      <v-btn to="/care" text>Dicas</v-btn> <!-- Botão para a página de dicas de cuidados -->
    </v-app-bar>

    <!-- Área principal do conteúdo da aplicação -->
    <v-main style="background-color: #accee3;">
      <v-container fluid>
        <!-- A renderização da página atual será gerenciada pelo Vue Router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Componente de rodapé da aplicação -->
    <app-footer></app-footer>
  </v-app>
</template>

<script>
// Importação do componente de rodapé
import AppFooter from './components/common/AppFooter.vue';
// Importação da imagem de banner
import logo from '@/assets/images/logo.png';

export default {
  name: 'App', // Nome do componente principal
  components: {
    AppFooter // Registro do componente de rodapé para uso no template
  },
  data() {
    return {
      logo // Agora você pode usar essa variável no template
    };
  }
}
</script>

<style scoped>
/* Estilos para a página inteira */
body {
  background-color: #4f7891;
  /* Cor de fundo da página */
}

/* Estilo para a logo link (para tornar clicável) */
.logo-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* Estilo para cartões com efeito de hover */
.hover-card {
  transition: transform 0.2s ease-in-out;
  /* Transição suave ao passar o mouse */
  cursor: pointer;
  /* Cursor de mão indicando que o item é clicável */
}

/* Efeito de aumento do tamanho do cartão ao passar o mouse */
.hover-card:hover {
  transform: scale(1.05);
  /* Aumento de 5% no tamanho do cartão */
}
</style>
