<template>
  <div class="container">
    Ach bestel mar, bestel mar, bestel mar
    <br />
    Ge wet dat ik 't neet kan loate
    <br />
    Nog efkes en dan begin ik
    <br />
    D'r wir duchtig langs te proate
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  font-size: 1.4rem;
  padding: 2.6rem;

  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

@media only screen and (min-width: 700px) {
  .container {
    font-size: 2rem;
    padding: 6rem;
    margin-top: 0;
  }
}
@media only screen and (min-width: 1200px) {
  .container {
    font-size: 3rem;
    padding: 6rem 16rem;
  }
}
</style>
