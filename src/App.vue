

<template>
  <header>
    <h1>Mi Portafolio</h1>
    <nav>
      <a href="#proyectos">Proyectos</a>
      <a href="#trabajos">Trabajos</a>
      <a href="#estudios">Estudios</a>
      <a href="#conocimientos">Conocimientos</a>
    </nav>
  </header>
  <main>
    <section id="proyectos">
      <h2>Proyectos</h2>
      <!-- Aquí se mostrarán los proyectos destacados -->
    </section>
    <section id="trabajos">
      <h2>Trabajos</h2>
      <!-- Aquí se mostrarán los trabajos o experiencias -->
    </section>
    <section id="estudios">
      <h2>Estudios</h2>
      <!-- Aquí se mostrarán los estudios o formaciones -->
    </section>
    <section id="conocimientos">
      <h2>Conocimientos</h2>
      <!-- Aquí se mostrarán los conocimientos o skills -->
    </section>
  </main>
  <footer>
    <small>&copy; 2026 Tu Nombre</small>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  color: #fff;
  padding: 2rem 0 1rem 0;
}
nav {
  margin-top: 1rem;
}
nav a {
  color: #42b883;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
main {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}
section {
  margin-bottom: 2.5rem;
}
footer {
  text-align: center;
  padding: 1rem 0;
  background: #f5f5f5;
  color: #888;
}
</style>
