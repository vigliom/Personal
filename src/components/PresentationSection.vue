<template>
  <section class="presentation-section">
    <div class="presentation-bg"></div>
    <div class="presentation-content">
      <h2 class="presentation-title">¡Hola! Soy Jorge Pérez Ludeña</h2>
      <p class="presentation-bio">
        Full Stack Developer orientado a backend, apasionado por crear sistemas completos, eficientes y mantenibles. Me especializo en transformar problemas complejos en soluciones limpias y escalables, desde el diseño de APIs robustas hasta la entrega de interfaces intuitivas. Mi motivación es construir software que resuelva problemas reales de negocio y escale en el tiempo.
      </p>
      <div class="presentation-actions">
        <Button label="Contactar" icon="pi pi-envelope" class="p-button-rounded p-button-outlined" @click="contactar" />
        <Button label="LinkedIn" icon="pi pi-linkedin" class="p-button-rounded p-button-secondary" @click="goLinkedIn" />
        <Button label="GitHub" icon="pi pi-github" class="p-button-rounded p-button-help" @click="goGitHub" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from 'primevue/button';

function contactar() {
  window.location.href = 'mailto:jorgeperez96jpl@gmail.com';
}
function goLinkedIn() {
  window.open('https://www.linkedin.com/in/jorpelu/', '_blank');
}
function goGitHub() {
  window.open('https://github.com/vigliom', '_blank');
}
</script>

<style scoped>
.presentation-section {
  position: relative;
  padding: 3.5rem 1.5rem 2.5rem 1.5rem;
  margin-bottom: 2.5rem;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 32px #0001;
  background: var(--main-bg);
  z-index: 1;
}
.presentation-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 30%, var(--accent) 0%, transparent 70%),
    radial-gradient(circle at 20% 80%, #42b88355 0%, transparent 70%);
  opacity: 0.18;
  z-index: 0;
}
.presentation-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
.presentation-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.1rem;
  color: var(--main-text);
}
.presentation-bio {
  font-size: 1.15rem;
  color: var(--main-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}
.presentation-actions {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
}
</style>
