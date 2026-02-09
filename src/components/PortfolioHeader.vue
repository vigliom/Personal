
<template>
  <header class="portfolio-header">
    <div class="header-content">
      <img class="avatar-img" src="https://avatars.githubusercontent.com/u/51330275?v=4" alt="Jorge Pérez Ludeña avatar" />
      <div class="header-info">
        <h1 class="name">Jorge Pérez Ludeña</h1>
        <p class="subtitle">Full Stack Developer · Backend Oriented</p>
        <div class="social-links">
          <a href="https://github.com/vigliom" target="_blank" aria-label="GitHub"><i class="pi pi-github"></i></a>
          <a href="https://www.linkedin.com/in/jorpelu/" target="_blank" aria-label="LinkedIn"><i class="pi pi-linkedin"></i></a>
          <a href="mailto:jorgeperez96jpl@gmail.com" aria-label="Email"><i class="pi pi-envelope"></i></a>
        </div>
      </div>
      <nav class="header-links">
        <a href="#proyectos">Proyectos</a>
        <a href="#trabajos">Experiencia</a>
        <a href="#estudios">Formación</a>
        <a href="#conocimientos">Skills</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Puedes importar aquí componentes PrimeVue si quieres añadir botones, menús, etc.
</script>

<style scoped>
.portfolio-header {
  background: var(--main-bg);
  color: var(--main-text);
  box-shadow: 0 2px 8px #0001;
  padding: 2.2rem 0 1.2rem 0;
  animation: fadeInDown 0.8s cubic-bezier(.39,.575,.56,1) both;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2.5rem;
}
.avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 2px 12px #0002;
  border: 3px solid var(--accent);
  object-fit: cover;
  transition: transform 0.3s;
}
.avatar-img:hover {
  transform: scale(1.07) rotate(-2deg);
}
.header-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.name {
  margin: 0;
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: -1px;
}
.subtitle {
  margin: 0;
  font-size: 1.1rem;
  color: var(--accent);
  font-weight: 500;
}
.social-links {
  margin-top: 0.5rem;
  display: flex;
  gap: 1.1rem;
}
.social-links a {
  color: var(--main-text);
  font-size: 1.5rem;
  transition: color 0.2s, transform 0.2s;
}
.social-links a:hover {
  color: var(--accent);
  transform: translateY(-2px) scale(1.15);
}
.header-links {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-end;
}
.header-links a {
  color: var(--main-text);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.08rem;
  transition: color 0.2s;
}
.header-links a:hover {
  color: var(--accent);
}
@media (max-width: 900px) {
  .header-content {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
  .header-links {
    flex-direction: row;
    gap: 1.2rem;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
