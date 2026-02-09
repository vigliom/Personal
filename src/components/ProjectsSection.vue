<template>
    <section id="proyectos">
        <h2 class="projects-title">Proyectos Destacados</h2>
        <div class="projects-grid">
            <div v-for="proyecto in proyectos" :key="proyecto.url" class="project-card-custom">
                <div class="project-header">
                    <div class="project-icon-custom">
                        <i class="pi pi-github"></i>
                    </div>
                    <a :href="proyecto.url" target="_blank" rel="noopener" class="project-title-custom card-title-link">
                        {{ proyecto.nombre }}
                    </a>
                </div>
                <div class="project-meta">
                    <span class="meta-stack">{{ proyecto.stack.join(' + ') }}</span>
                    <span class="meta-dot">·</span>
                    <span class="meta-type">Open Source</span>
                </div>
                <p class="project-desc-custom">{{ proyecto.descripcion }}</p>
                <div class="project-stack-custom">
                    <span v-for="tech in proyecto.stack" :key="tech" class="tech-badge">{{ tech }}</span>
                </div>
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
                        <span>Ver en GitHub</span>
                        <i class="pi pi-external-link external-link-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>



<script setup>
import proyectos from '../data/proyectos.js';
</script>

<style scoped>
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
    margin-right: 0.7em;
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

.projects-title {
    font-size: 1.7rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: var(--main-text);
    text-align: center;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.2rem;
    margin-top: 1.5rem;
}

.project-card-custom {
    background: #555555;
    border-radius: 16px;
    border: 1.5px solid #e0e6ed;
    box-shadow: 0 4px 24px #0001;
    padding: 1.2rem 1.1rem 1rem 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 210px;
    position: relative;
    transition: box-shadow 0.22s, transform 0.22s, background 0.22s;
    animation: fadeInUp 0.7s cubic-bezier(.39, .575, .56, 1) both;
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

.meta-dot {
    font-size: 1.1em;
    margin: 0 0.2em;
}

.meta-type {
    font-size: 0.97em;
    color: #aaa;
}

.project-header {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin-bottom: 0.7rem;
}

.project-card-custom {
    background: var(--main-bg);
    color: var(--main-text);
    border-radius: 16px;
    border: 1.5px solid #e0e6ed;
    box-shadow: 0 4px 24px #0001;
    padding: 1.2rem 1.1rem 1rem 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 210px;
    position: relative;
    transition: box-shadow 0.22s, transform 0.22s, background 0.22s;
    animation: fadeInUp 0.7s cubic-bezier(.39, .575, .56, 1) both;
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

.project-desc-custom {
    margin: 0.7rem 0 1.1rem 0;
    color: var(--main-text);
    font-size: 1.07rem;
    line-height: 1.5;
}

.project-stack-custom {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.7rem;
}

.tech-badge {
    background: #e3f2fd;
    color: var(--accent);
    border-radius: 8px;
    font-size: 0.97rem;
    padding: 0.22rem 0.8rem;
    font-weight: 600;
    letter-spacing: 0.2px;
    border: 1px solid var(--accent);
    box-shadow: 0 1px 4px #0001;
}

.project-footer {
    margin-top: 1.2rem;
    display: flex;
    justify-content: flex-end;
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
