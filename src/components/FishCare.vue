<template>
  <v-container fluid class="bg-container">
    <v-card class="pa-6 mx-auto text-center" elevation="4">
      <h1 class="text-h4 font-weight-bold">Dicas de Cuidados com Peixes</h1>
      <p class="text-subtitle-1">Aprenda a cuidar bem dos seus peixes, garantindo um ambiente saudável e equilibrado.</p>
    </v-card>

    <!-- Tabs -->
    <v-tabs v-model="activeTab" grow class="mt-4 bg-primary text-white rounded-lg">
      <v-tab value="freshwater">Água Doce</v-tab>
      <v-tab value="saltwater">Água Salgada</v-tab>
      <v-tab value="beginners">Para Iniciantes</v-tab>
    </v-tabs>

    <!-- Conteúdo das Tabs -->
    <v-window v-model="activeTab" class="mt-4">
      <!-- Água Doce -->
      <v-window-item value="freshwater">
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="info-card">
              <v-card-title>
                <v-icon color="blue">mdi-water</v-icon> Parâmetros da Água
              </v-card-title>
              <v-card-text>
                <ul>
                  <li><strong>Temperatura:</strong> 22-28°C</li>
                  <li><strong>pH:</strong> 6.5-7.5</li>
                  <li><strong>Dureza:</strong> 5-15 dGH</li>
                </ul>
                <p class="text-body-2">Monitore regularmente estes parâmetros com kits de teste.</p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="info-card">
              <v-card-title>
                <v-icon color="green">mdi-flask</v-icon> Ciclagem do Aquário
              </v-card-title>
              <v-card-text>
                <ol>
                  <li>Configure o aquário com filtro e substrato</li>
                  <li>Adicione uma fonte de amônia</li>
                  <li>Monitore os níveis de amônia, nitrito e nitrato</li>
                  <li>Espere até que a amônia e nitrito cheguem a zero</li>
                  <li>Realize trocas parciais de água regularmente</li>
                </ol>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="info-card">
              <v-card-title>
                <v-icon color="brown">mdi-leaf</v-icon> Plantas para Aquário de Água Doce
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col v-for="(plant, index) in freshwaterPlants" :key="index" cols="12" md="4">
                    <v-card class="plant-card">
                      <v-card-title>{{ plant.name }}</v-card-title>
                      <v-card-text>
                        <p><strong>Dificuldade:</strong> {{ plant.difficulty }}</p>
                        <p><strong>Iluminação:</strong> {{ plant.light }}</p>
                        <p>{{ plant.description }}</p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- Água Salgada -->
      <v-window-item value="saltwater">
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="info-card">
              <v-card-title>
                <v-icon color="blue">mdi-waves</v-icon> Parâmetros da Água Salgada
              </v-card-title>
              <v-card-text>
                <ul>
                  <li><strong>Temperatura:</strong> 24-26°C</li>
                  <li><strong>pH:</strong> 8.1-8.4</li>
                  <li><strong>Salinidade:</strong> 1.023-1.025 sg</li>
                  <li><strong>Alcalinidade:</strong> 8-12 dKH</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="info-card">
              <v-card-title>
                <v-icon color="orange">mdi-lightbulb</v-icon> Equipamentos Essenciais
              </v-card-title>
              <v-card-text>
                <ul>
                  <li><strong>Skimmer de Proteínas:</strong> Remove resíduos orgânicos</li>
                  <li><strong>Filtro Mecânico:</strong> Elimina partículas em suspensão</li>
                  <li><strong>Rocha Viva:</strong> Filtragem biológica e habitat natural</li>
                  <li><strong>Iluminação:</strong> Essencial para corais</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="info-card">
              <v-card-title>
                <v-icon color="brown">mdi-leaf</v-icon> Plantas para Aquário de Água Salgada
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col v-for="(plant, index) in saltwaterPlants" :key="index" cols="12" md="4">
                    <v-card class="plant-card">
                      <v-card-title>{{ plant.name }}</v-card-title>
                      <v-card-text>
                        <p><strong>Dificuldade:</strong> {{ plant.difficulty }}</p>
                        <p><strong>Iluminação:</strong> {{ plant.light }}</p>
                        <p>{{ plant.description }}</p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>

      <!-- Para Iniciantes -->
      <v-window-item value="beginners">
        <v-card class="info-card">
          <v-card-title class="text-h5">Guia para Iniciantes</v-card-title>
          <v-card-text>
            <v-timeline>
              <v-timeline-item v-for="(item, i) in beginnerSteps" :key="i" :dot-color="item.color">
                <template v-slot:opposite>
                  <span>{{ item.subtitle }}</span>
                </template>
                <v-card>
                  <v-card-title class="text-h6">{{ item.title }}</v-card-title>
                  <v-card-text>{{ item.description }}</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script>
export default {
  name: 'FishCare',
  data() {
    return {
      activeTab: 'freshwater', // Default tab is freshwater
      freshwaterPlants: [
        {
          name: 'Anúbias',
          difficulty: 'Fácil',
          light: 'Baixa a Média',
          description: 'Planta resistente que pode ser fixada em rochas ou madeiras. Excelente para iniciantes.'
        },
        {
          name: 'Vallisneria',
          difficulty: 'Fácil',
          light: 'Média',
          description: 'Planta de fundo que cresce em formato vertical. Ótima para criar barreiras naturais.'
        },
        {
          name: 'Musgo de Java',
          difficulty: 'Muito Fácil',
          light: 'Baixa',
          description: 'Cresce em superfícies como rochas e madeiras. Perfeito para aquários com pouca luz.'
        }
      ],
      saltwaterPlants: [
        {
          name: 'Coral de Cérebro',
          difficulty: 'Média',
          light: 'Alta',
          description: 'Coral duro que requer iluminação intensa e fluxo de água moderado.'
        },
        {
          name: 'Coral de Moeda',
          difficulty: 'Fácil',
          light: 'Média',
          description: 'Coral mole que se adapta bem a diferentes condições de luz.'
        },
        {
          name: 'Coral de LPS',
          difficulty: 'Difícil',
          light: 'Alta',
          description: 'Corais duros que requerem cuidados especiais e iluminação intensa.'
        }
      ],
      beginnerSteps: [
        {
          title: 'Pesquisa',
          subtitle: 'Semana 1',
          color: 'blue',
          description: 'Pesquise sobre as espécies de peixes que gostaria de ter. Entenda suas necessidades, tamanho, compatibilidade e requisitos de habitat.'
        },
        {
          title: 'Montagem do Aquário',
          subtitle: 'Semana 2',
          color: 'green',
          description: 'Monte o aquário com substrato, decorações e equipamentos necessários como filtro, termostato e iluminação.'
        },
        {
          title: 'Ciclagem',
          subtitle: 'Semanas 3-6',
          color: 'purple',
          description: 'Realize a ciclagem do aquário para estabelecer as colônias de bactérias benéficas. Este é um passo crucial e não deve ser apressado.'
        },
        {
          title: 'Primeiros Peixes',
          subtitle: 'Semana 7',
          color: 'orange',
          description: 'Adicione os primeiros peixes em pequenas quantidades. Espécies resistentes como molinésias ou tetras são boas opções iniciais.'
        },
        {
          title: 'Manutenção Regular',
          subtitle: 'Contínuo',
          color: 'red',
          description: 'Estabeleça uma rotina de manutenção com trocas parciais de água, limpeza do filtro e monitoramento dos parâmetros da água.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg-container {
  background-color: #accee3;
  padding-bottom: 30px;
}

.info-card {
  background: white;
  border-radius: 12px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.plant-card {
  background: #f1f8e9;
  border-radius: 12px;
  padding: 12px;
  text-align: center;
}
</style>
