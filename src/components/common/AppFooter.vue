<template>
  <v-footer app padless color="primary" class="white--text footer-thin">
    <v-container>
      <v-row justify="space-between" align="center">
        <!-- Logo e descrição -->
        <v-col cols="12" md="4" class="text-center text-md-left">
          <h3 class="text-h6 font-weight-bold">AquaFish</h3>
          <p class="text-caption">Seu guia completo sobre peixes e aquarismo.</p>
        </v-col>

        <!-- Contato e redes sociais -->
        <v-col cols="12" md="4" class="text-center">
          <p class="text-caption">info@aquafish.exemplo.com</p>
          <div class="d-flex justify-center">
            <a href="https://www.facebook.com/" target="_blank">
              <v-btn icon variant="text" class="social-btn">
                <v-icon small>mdi-facebook</v-icon>
              </v-btn>
            </a>
            <a href="https://www.instagram.com/posspesca/" target="_blank">
              <v-btn icon variant="text" class="social-btn">
                <v-icon small>mdi-instagram</v-icon>
              </v-btn>
            </a>
          </div>
        </v-col>

        <!-- Direitos autorais -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <p class="text-caption">&copy; {{ new Date().getFullYear() }} - AquaFish</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
/* Reduz a altura do rodapé */
.footer-thin {
  padding: 8px 0;
  font-size: 12px;
}

/* Ícones menores e alinhados */
.social-btn {
  color: white;
  transition: transform 0.2s ease-in-out;
}
.social-btn:hover {
  transform: scale(1.1);
  color: #ffcc00;
}
</style>
