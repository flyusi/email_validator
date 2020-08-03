<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../img/111.png" class="d-block w-100" alt="React">
    </div>
    <div class="carousel-item">
      <img src="../img/112.png" class="d-block w-100" alt="Vue">
    </div>
        <div class="carousel-item">
      <img src="../img/113.png" class="d-block w-100" alt="пример кода Vue">
    </div>
        <div class="carousel-item">
      <img src="../img/114.png" class="d-block w-100" alt="пример кода Vue">
    </div>
        <div class="carousel-item">
      <img src="../img/115.png" class="d-block w-100" alt="пример кода Angular">
    </div>
        <div class="carousel-item">
      <img src="../img/116.png" class="d-block w-100" alt="Angular">
    </div>
        <div class="carousel-item">
      <img src="../img/117.png" class="d-block w-100" alt="пример Node">
    </div>
        <div class="carousel-item">
      <img src="../img/118.jpeg" class="d-block w-100" alt="Node">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
export default {
    name:'Carousel'
}
</script>
<style scoped>
.carousel-item {
  height: 800px;
  width: 100%;
  overflow: hidden;
}

.carousel-item img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

</style>