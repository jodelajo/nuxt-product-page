<template>
  <div>
   <NavBar />
    <Nuxt />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700;900&family=Readex+Pro:wght@300;500;700&display=swap");

body {
  box-sizing: border-box;
  margin: 0;
  background-color: rgba(223, 215, 217, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
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