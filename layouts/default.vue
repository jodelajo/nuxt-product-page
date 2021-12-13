<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700;900&family=Readex+Pro:wght@300;500;700&display=swap");
:root {
  --colors-border: 1px solid rgba(138, 138, 138, 0.4);
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: rgba(182, 182, 182, 0.164);
  font-family: "Montserrat", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
h2 {
  font-weight: 300;
  font-size: 1.6rem;
  text-transform: uppercase;
}
h3 {
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
}
</style>
