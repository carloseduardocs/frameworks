// Importa a função createApp do Vue para criar a aplicação
import { createApp } from 'vue'
// Importa o componente raiz (App) da aplicação
import App from './App.vue'
// Importa o roteador (Vue Router) para gerenciamento de navegação
import router from './router'
// Importa a função createVuetify do Vuetify para configurar o framework de UI
import { createVuetify } from 'vuetify'
// Importa os estilos padrões do Vuetify
import 'vuetify/styles'
// Importa os ícones do Material Design (usados pelo Vuetify)
import '@mdi/font/css/materialdesignicons.css'
// Importa todos os componentes do Vuetify
import * as components from 'vuetify/components'
// Importa todas as diretivas do Vuetify
import * as directives from 'vuetify/directives'

// Criação da instância do Vuetify com configurações personalizadas
const vuetify = createVuetify({
  components, // Registra todos os componentes do Vuetify
  directives, // Registra todas as diretivas do Vuetify
  theme: { // Configurações do tema
    themes: {
      light: { // Definições de cores para o tema claro
        primary: '#1E3A8A', // Cor primária (usada em elementos como botões e barras)
        secondary: '#3B82F6', // Cor secundária
        accent: '#60A5FA', // Cor de destaque
        background: '#84a5ba', // Cor de fundo
        surface: '#FFFFFF', // Cor de superfície (como cartões ou caixas de conteúdo)
      },
    },
  },
})

// Cria a instância da aplicação Vue
const app = createApp(App)
// Usa o roteador na aplicação para navegação entre páginas
app.use(router)
// Usa o Vuetify para a aplicação (UI e tema)
app.use(vuetify)
// Monta a aplicação no elemento HTML com o id 'app'
app.mount('#app')
