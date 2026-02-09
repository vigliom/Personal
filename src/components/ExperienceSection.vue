<template>
  <section id="trabajos">
    <h2 class="exp-title">Experiencia Laboral</h2>
    <div class="exp-timeline">
      <div v-for="(trabajo, i) in trabajos" :key="trabajo.empresa + trabajo.puesto + i" class="exp-item">
        <div class="exp-dot">
          <i class="pi pi-briefcase"></i>
        </div>
        <div class="exp-content">
          <div class="exp-header">
            <span class="exp-puesto">{{ trabajo.puesto }}</span>
            <span class="exp-periodo">{{ trabajo.periodo }}</span>
          </div>
          <span class="exp-empresa">{{ trabajo.empresa }}</span>
          <p class="exp-desc">{{ trabajo.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import trabajos from '../data/trabajos.js';
</script>

<style scoped>
.exp-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--main-text);
  text-align: center;
}
.exp-timeline {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-top: 2rem;
  position: relative;
  padding-left: 32px;
}
.exp-timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(var(--accent), var(--main-bg) 90%);
  border-radius: 2px;
  opacity: 0.18;
}
.exp-item {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  position: relative;
}
.exp-dot {
  width: 32px;
  height: 32px;
  background: var(--accent);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px #0002;
  position: absolute;
  left: -32px;
  top: 0.2rem;
}
.exp-content {
  background: var(--main-bg);
  border-radius: 12px;
  box-shadow: 0 2px 8px #0001;
  padding: 1rem 1.3rem;
  min-width: 0;
  flex: 1;
  color: var(--main-text);
  border: 1.5px solid #e0e6ed;
}
.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
}
.exp-puesto {
  font-weight: 700;
  color: var(--main-text);
  font-size: 1.08rem;
}
.exp-periodo {
  font-size: 0.97rem;
  color: #888;
  font-weight: 500;
}
.exp-empresa {
  font-weight: 600;
  color: var(--accent);
  font-size: 1.01rem;
}
.exp-desc {
  margin: 0.5rem 0 0 0;
  color: var(--main-text);
  font-size: 0.99rem;
  line-height: 1.5;
}
</style>
