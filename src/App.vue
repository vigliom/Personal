


<script setup>
import PortfolioHeader from './components/PortfolioHeader.vue';
import PresentationSection from './components/PresentationSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import StudiesSection from './components/StudiesSection.vue';
import SkillsSection from './components/SkillsSection.vue';
</script>

<template>
  <PortfolioHeader />
  <main>
    <PresentationSection />
    <ProjectsSection />
    <ExperienceSection />
    <StudiesSection />
    <SkillsSection />
  </main>
  <footer class="main-footer">
    <div class="footer-content">
      <span class="footer-brand">Vigliom Solutions</span>
      <span class="footer-separator">·</span>
      <span class="footer-copy">&copy; 2026</span>
      <a href="https://github.com/vigliom" target="_blank" rel="noopener" class="footer-link" aria-label="GitHub">
        <i class="pi pi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/vigliom/" target="_blank" rel="noopener" class="footer-link" aria-label="LinkedIn">
        <i class="pi pi-linkedin"></i>
      </a>
      <a href="mailto:vigliom@gmail.com" class="footer-link" aria-label="Email">
        <i class="pi pi-envelope"></i>
      </a>
    </div>
  </footer>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.main-footer {
  width: 100%;
  background: var(--main-bg);
  color: var(--main-text);
  border-top: 1.5px solid #e0e6ed;
  box-shadow: 0 -2px 12px #0001;
  padding: 1.1rem 0 0.7rem 0;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-content {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.08rem;
  font-weight: 500;
  letter-spacing: 0.1px;
}
.footer-brand {
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.5px;
}
.footer-separator {
  color: #bbb;
  font-size: 1.2em;
  margin: 0 0.2em;
}
.footer-copy {
  color: #888;
  font-size: 0.98em;
}
.footer-link {
  color: var(--main-text);
  margin-left: 0.7em;
  font-size: 1.18em;
  transition: color 0.18s;
  text-decoration: none;
}
.footer-link:hover {
  color: var(--accent);
}
</style>
