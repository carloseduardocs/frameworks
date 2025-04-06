<template>
    <v-card class="fish-card">
      <v-img :src="fish.image" height="180" cover></v-img>
      <v-card-title>{{ fish.name }}</v-card-title>
      <v-card-subtitle v-if="showScientific">{{ fish.scientificName }}</v-card-subtitle>
      <v-card-text v-if="showDescription">
        <p>{{ truncatedDescription }}</p>
        
        <v-chip v-if="fish.habitat" small class="mr-2 mt-2">
          {{ fish.habitat }}
        </v-chip>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="detailed" color="primary" :to="'/fish/' + fish.id">
          Ver detalhes
        </v-btn>
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'FishCard',
    props: {
      fish: {
        type: Object,
        required: true
      },
      detailed: {
        type: Boolean,
        default: true
      },
      showScientific: {
        type: Boolean,
        default: true
      },
      showDescription: {
        type: Boolean,
        default: true
      },
      descriptionLength: {
        type: Number,
        default: 100
      }
    },
    computed: {
      truncatedDescription() {
        if (!this.fish.description) return '';
        if (this.fish.description.length <= this.descriptionLength) {
          return this.fish.description;
        }
        return this.fish.description.substring(0, this.descriptionLength) + '...';
      }
    }
  }
  </script>
  
  <style scoped>
  .fish-card {
    transition: transform 0.3s;
  }
  .fish-card:hover {
    transform: translateY(-5px);
  }
  </style>