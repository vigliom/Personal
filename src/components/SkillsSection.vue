<template>
  <section id="conocimientos">
    <h2>Conocimientos y Skills</h2>
    <div class="skills-grid">
      <Tag v-for="skill in conocimientos" :key="skill.nombre" :value="skill.nombre" :severity="getSeverity(skill.nivel)" class="skill-tag">
        <template #icon>
          <i v-if="getIcon(skill.nombre)" :class="getIcon(skill.nombre)" style="margin-right:0.5rem;"></i>
        </template>
        <template #default>
          {{ skill.nombre }}
        </template>
        <template #value>
          <span class="nivel">{{ skill.nivel }}</span>
        </template>
      </Tag>
    </div>
  </section>
</template>

<script setup>
import conocimientos from '../data/conocimientos.js';
import Tag from 'primevue/tag';

function getSeverity(nivel) {
  if (nivel === 'Avanzado') return 'success';
  if (nivel === 'Intermedio') return 'info';
  return 'warning';
}

function getIcon(nombre) {
  const icons = {
    'JavaScript': 'pi pi-code',
    'Vue.js': 'pi pi-desktop',
    'React': 'pi pi-bolt',
    'PHP': 'pi pi-server',
    'C#': 'pi pi-cog',
    'Python': 'pi pi-database',
    'Java': 'pi pi-mobile',
    'MySQL': 'pi pi-database',
    'SQL Server': 'pi pi-database',
    'Docker': 'pi pi-box',
    'AWS': 'pi pi-cloud',
    'Azure': 'pi pi-cloud',
    'GitHub Actions': 'pi pi-github',
    'API REST': 'pi pi-link',
    'Laravel': 'pi pi-server',
    'Spring Boot': 'pi pi-server',
    'Redis': 'pi pi-database',
    'Clean Architecture': 'pi pi-sitemap',
    'CI/CD': 'pi pi-sliders-h',
    '.NET Core': 'pi pi-cog',
  };
  return icons[nombre] || '';
}
</script>

<style scoped>
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}
.skill-tag {
  font-size: 1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  min-width: 120px;
  justify-content: space-between;
}
.nivel {
  font-size: 0.85em;
  color: #888;
  margin-left: 0.7em;
}
</style>
