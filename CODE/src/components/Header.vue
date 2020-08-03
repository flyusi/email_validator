<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Виталий</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#Vue">Vue</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#React">React</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#Node" tabindex="-1" aria-disabled="true">Node</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#AngularJS" tabindex="-1" aria-disabled="true">AngularJS</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#Email" tabindex="-1" aria-disabled="true">Обратная связь</a>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
      </ul>
      <!-- поиск -->
      <!-- <form class="d-flex">
        <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Найти</button>
      </form> -->
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

</style>