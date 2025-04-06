<template>
  <v-container>
    <!-- Banner -->
    <v-row>
      <v-col cols="12">
        <v-card class="text-center pa-4" elevation="2">
          <v-card-title class="text-h4 font-weight-bold">Bem-vindo ao AquaFish</v-card-title>
          <v-card-text class="text-subtitle-1">
            Seu guia completo sobre peixes e aquarismo
          </v-card-text>
          <v-img :src="bannerImage" height="300" cover class="rounded-lg"></v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- Cards de Navegação -->
    <v-row class="mt-4">
      <v-col cols="12" md="4">
        <v-card 
          @click="$router.push('/catalog')" 
          height="200" 
          class="d-flex flex-column align-center justify-center text-center hover-card"
          elevation="3"
        >
          <v-icon color="orange" size="40" class="mb-2">mdi-fish</v-icon>
          <v-card-title class="text-h5">Catálogo de Peixes</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card 
          @click="$router.push('/planner')" 
          height="200" 
          class="d-flex flex-column align-center justify-center text-center hover-card"
          elevation="3"
        >
          <v-icon color="blue" size="40" class="mb-2">mdi-water</v-icon>
          <v-card-title class="text-h5">Planejador de Aquário</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card 
          @click="$router.push('/care')" 
          height="200" 
          class="d-flex flex-column align-center justify-center text-center hover-card"
          elevation="3"
        >
          <v-icon color="red" size="40" class="mb-2">mdi-information</v-icon>
          <v-card-title class="text-h5">Dicas de Cuidados</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import bannerImage from '@/assets/images/aquario.jpg';

export default {
  name: 'HomePage',
  data() {
    return {
      bannerImage
    };
  }
}
</script>

<style scoped>
/* Efeito de hover nos cards */
.hover-card {
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}
.hover-card:hover {
  transform: scale(1.05);
}
body {
  background-color: #4f7891; /* Aplique a cor de fundo desejada aqui */
  margin: 0; /* Remove o espaçamento padrão */
  padding: 0; /* Remove o espaçamento padrão */
}
</style>
