<template>
  <section id="estudios">
    <h2>Formación Académica</h2>
    <div class="studies-list">
      <Card v-for="estudio in estudios" :key="estudio.titulo" class="study-card">
        <template #title>
          {{ estudio.titulo }}
        </template>
        <template #content>
          <p class="institucion">{{ estudio.institucion }}</p>
          <p class="periodo">{{ estudio.periodo }}</p>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import estudios from '../data/estudios.js';
import Card from 'primevue/card';
</script>

<style scoped>
.studies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1.5rem;
}
.study-card {
  min-width: 260px;
  border-radius: var(--radius);
  box-shadow: 0 2px 12px #0001;
}
.institucion {
  color: var(--accent);
  font-weight: 500;
  margin: 0.5rem 0 0 0;
}
.periodo {
  color: #888;
  font-size: 0.95rem;
  margin: 0;
}
</style>
