<template>
  <v-container v-if="fish">
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="fish.image" height="400" contain></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h4">{{ fish.name }}</v-card-title>
          <v-card-subtitle class="text-h6">{{ fish.scientificName }}</v-card-subtitle>
          
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>{{ fish.description }}</p>
              </v-col>
              
              <v-col cols="6">
                <strong>Habitat:</strong> {{ fish.habitat }}
              </v-col>
              
              <v-col cols="6">
                <strong>Temperatura:</strong> {{ fish.temperature || 'Não especificado' }}
              </v-col>
              
              <v-col cols="6">
                <strong>pH:</strong> {{ fish.ph || 'Não especificado' }}
              </v-col>
              
              <v-col cols="6">
                <strong>Tamanho:</strong> {{ fish.size || 'Não especificado' }}
              </v-col>
              
              <v-col cols="12" v-if="fish.careInstructions">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-title>Instruções de Cuidado</v-expansion-panel-title>
                    <v-expansion-panel-text>
                      {{ fish.careInstructions }}
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-card-text>
          
          <v-card-actions>
            <v-btn color="primary" @click="addToFavorites">
              <v-icon start>mdi-heart</v-icon>
              Adicionar aos Favoritos
            </v-btn>
            <v-btn color="secondary" @click="$router.go(-1)">
              Voltar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
  <v-container v-else>
    <v-alert type="error">Peixe não encontrado!</v-alert>
  </v-container>
</template>

<script>
import FishCatalog from '@/components/FishCatalog.vue'; // Importa a lista de peixes

export default {
  name: 'FishDetails',
  data() {
    return {
      fish: null
    };
  },
  created() {
    const fishId = parseInt(this.$route.params.id); // Obtém o ID da URL e converte para número

    // Busca o peixe correspondente na lista do FishCatalog
    const allFish = FishCatalog.data().fishList;
    this.fish = allFish.find(fish => fish.id === fishId);
  },
  methods: {
    addToFavorites() {
      alert(`${this.fish.name} foi adicionado aos favoritos!`);
    }
  }
};
</script>
