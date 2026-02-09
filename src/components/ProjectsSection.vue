<template>
  <section id="proyectos">
    <!-- ECOSISTEMA DESTACADO -->
    <h2 class="projects-title">🚀 Ecosistema Amparo & Company</h2>
    <p class="ecosystem-intro">
      Ecosistema digital modular en <strong>producción real</strong>, con aplicaciones interconectadas, arquitectura robusta y enfoque en fiabilidad, seguridad y escalabilidad.
    </p>
    <div class="ecosystem-grid">
      <div v-for="proyecto in proyectosEcosistema" :key="proyecto.url" 
           :class="['ecosystem-card', { 'main-hub': proyecto.destacado }]">
        <div class="ecosystem-header">
          <span class="ecosystem-badge">{{ proyecto.badge }}</span>
          <a :href="proyecto.preview || proyecto.url" target="_blank" rel="noopener" class="ecosystem-title">{{ proyecto.titulo }}</a>
        </div>
        <div class="ecosystem-meta">
          <span class="meta-stack">{{ proyecto.stack.join(' + ') }}</span>
          <span class="meta-dot">·</span>
          <span class="meta-type">{{ proyecto.meta }}</span>
        </div>
        <p class="ecosystem-desc">{{ proyecto.descripcion }}</p>
        <ul class="ecosystem-list" v-if="proyecto.logros.length > 0">
          <li v-for="(logro, index) in proyecto.logros" :key="index">{{ logro }}</li>
        </ul>
        <div class="ecosystem-footer">
          <a v-if="proyecto.preview" :href="proyecto.preview" target="_blank" rel="noopener" class="demo-btn-modern">
            <i class="pi pi-desktop"></i> <span>Ver demo</span> <i class="pi pi-external-link external-link-icon"></i>
          </a>
          <a :href="proyecto.url" target="_blank" rel="noopener" class="github-btn-modern">
            <i class="pi pi-github"></i> <span>GitHub</span> <i class="pi pi-external-link external-link-icon"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="ecosystem-highlights">
      <div class="highlight-item">🏗️ Arquitectura modular</div>
      <div class="highlight-item">🔄 Microservicios</div>
      <div class="highlight-item">🔐 Seguridad</div>
      <div class="highlight-item">📊 Monitoreo</div>
      <div class="highlight-item">🎨 UX consistente</div>
      <div class="highlight-item">🚀 Producción real</div>
    </div>

    <!-- LISTADO DE PROYECTOS.JS -->
    <h2 v-if="otrosProyectos.length > 0" class="projects-title" style="margin-top:3.5rem">💼 Otros Proyectos Destacados</h2>
    <div v-if="otrosProyectos.length > 0" class="projects-grid">
      <div v-for="proyecto in otrosProyectos" :key="proyecto.url" class="project-card-custom">
        <div class="project-header">
          <a :href="proyecto.preview || proyecto.url" target="_blank" rel="noopener" class="project-title-custom card-title-link">
            {{ proyecto.nombre }}
          </a>
        </div>
        <div class="project-meta">
          <span class="meta-stack">{{ proyecto.stack.join(' + ') }}</span>
        </div>
        <p class="project-desc-custom">{{ proyecto.descripcion }}</p>
        <div class="project-footer">
          <template v-if="proyecto.preview">
            <a :href="proyecto.preview" target="_blank" rel="noopener" class="demo-btn-modern">
              <i class="pi pi-desktop"></i>
              <span>Ver demo</span>
              <i class="pi pi-external-link external-link-icon"></i>
            </a>
          </template>
          <a :href="proyecto.url" target="_blank" rel="noopener" class="github-btn-modern">
            <i class="pi pi-github"></i>
            <span>GitHub</span>
            <i class="pi pi-external-link external-link-icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import proyectos from '../data/proyectos.js';

const proyectosEcosistema = computed(() => 
  proyectos.filter(p => p.tipo === 'ecosistema')
);

const otrosProyectos = computed(() => 
  proyectos.filter(p => p.tipo !== 'ecosistema')
);
</script>

<style scoped>
/* Ecosystem Section Styles */
.ecosystem-intro {
  max-width: 800px;
  margin: 0 auto 2.5rem auto;
  font-size: 1.08rem;
  color: var(--main-text);
  text-align: center;
  line-height: 1.6;
  opacity: 0.95;
}
.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.2rem;
  margin-bottom: 2.2rem;
}
.ecosystem-card {
  background: var(--main-bg);
  color: var(--main-text);
  border-radius: 16px;
  border: 1.5px solid #e0e6ed;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 1.3rem 1.2rem 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  position: relative;
  transition: box-shadow 0.22s, background 0.22s;
  animation: fadeInUp 0.7s cubic-bezier(.39,.575,.56,1) both;
}
@media (prefers-color-scheme: dark) {
  .ecosystem-card {
    border-color: #444;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  }
}
.main-hub {
  border: 2.5px solid var(--accent);
  box-shadow: 0 8px 32px rgba(33, 150, 243, 0.15);
}
@media (prefers-color-scheme: dark) {
  .main-hub {
    box-shadow: 0 8px 32px rgba(33, 150, 243, 0.25);
  }
}
.ecosystem-header {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 0.7rem;
}
.ecosystem-badge {
  background: var(--accent);
  color: #fff;
  border-radius: 8px;
  font-size: 0.98rem;
  font-weight: 700;
  padding: 0.18rem 0.8rem;
  letter-spacing: 0.2px;
  margin-right: 0.5em;
}
.ecosystem-title {
  font-size: 1.18rem;
  font-weight: 700;
  color: var(--main-text);
  text-decoration: none;
  transition: color 0.18s;
}
.ecosystem-title:hover {
  color: var(--accent);
}
.ecosystem-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.98rem;
  color: #888;
  margin-bottom: 0.3rem;
  margin-top: -0.2rem;
}
.meta-dot {
  font-size: 1.1em;
  margin: 0 0.2em;
  color: #aaa;
}
.meta-type {
  font-size: 0.97em;
  color: #aaa;
}
.ecosystem-desc {
  margin: 0.7rem 0 0.7rem 0;
  color: var(--main-text);
  font-size: 1.07rem;
  line-height: 1.5;
}
.ecosystem-list {
  margin: 0 0 0.7rem 1.1rem;
  color: var(--main-text);
  font-size: 0.99rem;
  line-height: 1.5;
  list-style: disc;
}
.ecosystem-footer {
  margin-top: 1.1rem;
  display: flex;
  gap: 0.7rem;
  justify-content: flex-end;
}
.demo-btn-modern {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: none;
  color: var(--accent);
  border: 1.5px solid var(--accent);
  border-radius: 8px;
  padding: 0.38rem 1.1rem 0.38rem 1.1rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 1px 6px #0001;
  transition: background 0.18s, color 0.18s, border 0.18s, transform 0.18s;
  cursor: pointer;
}
.demo-btn-modern:hover,
.demo-btn-modern:focus {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  transform: translateY(-2px) scale(1.04);
  text-decoration: none;
}
.demo-btn-modern .pi-desktop {
  font-size: 1.15em;
  margin-right: 0.1em;
}
.github-btn-modern {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: none;
  color: var(--accent);
  border: 1.5px solid var(--accent);
  border-radius: 8px;
  padding: 0.38rem 1.1rem 0.38rem 1.1rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 1px 6px #0001;
  transition: background 0.18s, color 0.18s, border 0.18s, transform 0.18s;
  cursor: pointer;
}
.github-btn-modern:hover,
.github-btn-modern:focus {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  transform: translateY(-2px) scale(1.04);
  text-decoration: none;
}
.github-btn-modern .pi-github {
  font-size: 1.15em;
  margin-right: 0.1em;
}
.github-btn-modern .external-link-icon {
  font-size: 1em;
  margin-left: 0.2em;
}
.projects-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1.8rem;
  color: var(--main-text);
  text-align: center;
  letter-spacing: -0.5px;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.2rem;
  margin-top: 1.5rem;
}
.project-card-custom {
  background: var(--main-bg);
  color: var(--main-text);
  border-radius: 16px;
  border: 1.5px solid #e0e6ed;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  padding: 1.2rem 1.1rem 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 210px;
  position: relative;
  transition: box-shadow 0.22s, background 0.22s;
  animation: fadeInUp 0.7s cubic-bezier(.39,.575,.56,1) both;
}
@media (prefers-color-scheme: dark) {
  .project-card-custom {
    border-color: #444;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
  }
}
.project-header {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-bottom: 0.7rem;
}
.project-title-custom {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--main-text);
  text-decoration: none;
  transition: color 0.18s, text-shadow 0.18s;
  cursor: pointer;
  line-height: 1.2;
}
.project-title-custom:hover,
.project-title-custom:focus {
  color: var(--accent);
  text-shadow: 0 2px 12px #0002;
  text-decoration: none;
}
.project-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.98rem;
  color: #888;
  margin-bottom: 0.3rem;
  margin-top: -0.2rem;
}
.meta-stack {
  font-weight: 600;
  color: var(--accent);
}
.project-desc-custom {
  margin: 0.7rem 0 1.1rem 0;
  color: var(--main-text);
  font-size: 1.07rem;
  line-height: 1.5;
}
.project-footer {
  margin-top: 1.2rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.7rem;
}
.ecosystem-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 900px;
  margin: 2rem auto 0 auto;
  padding: 0;
}
.highlight-item {
  background: var(--main-bg);
  color: var(--main-text);
  border: 1.5px solid #e0e6ed;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  font-size: 0.98rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}
.highlight-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
@media (prefers-color-scheme: dark) {
  .highlight-item {
    border-color: #444;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  .highlight-item:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>