<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500&display=swap");
:root {
  --colors-border: 1px solid rgba(138, 138, 138, 0.4);
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  /* border: 1px solid red; */
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
