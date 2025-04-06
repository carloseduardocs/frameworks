// Importa as funções necessárias para criar o roteador do Vue
import { createRouter, createWebHistory } from 'vue-router'

// Importa os componentes que serão usados nas rotas
import HomePage from '../components/HomePage.vue'  // Página inicial
import FishCatalog from '../components/FishCatalog.vue'  // Catálogo de peixes
import FishDetails from '../components/FishDetails.vue'  // Detalhes do peixe
import AquariumPlanner from '../components/AquariumPlanner.vue'  // Planejador de aquário
import FishCare from '../components/FishCare.vue'  // Dicas de cuidados com peixes

// Define as rotas da aplicação, associando caminhos a componentes
const routes = [
  {
    path: '/', // Caminho para a página inicial
    name: 'home', // Nome da rota
    component: HomePage // Componente que será renderizado para esta rota
  },
  {
    path: '/catalog', // Caminho para a página de catálogo
    name: 'catalog', // Nome da rota
    component: FishCatalog // Componente para exibir o catálogo de peixes
  },
  {
    path: '/fish/:id', // Caminho dinâmico para exibir os detalhes de um peixe específico
    name: 'fishDetails', // Nome da rota
    component: FishDetails, // Componente que exibirá os detalhes do peixe
    props: true // Habilita o recebimento do parâmetro 'id' como propriedade do componente
  },
  {
    path: '/planner', // Caminho para o planejador de aquário
    name: 'planner', // Nome da rota
    component: AquariumPlanner // Componente para o planejador de aquário
  },
  {
    path: '/care', // Caminho para a página de cuidados com peixes
    name: 'care', // Nome da rota
    component: FishCare // Componente com as dicas de cuidados com peixes
  }
]

// Criação do roteador com a configuração de histórico e as rotas definidas
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usando o histórico da web para navegação sem recarregar a página
  routes // As rotas que foram configuradas acima
})

// Exporta o roteador para ser usado na aplicação
export default router
