<template>
  <div id="email" class="container">
    <div class="row">
      <!-- Форма обратной связи -->
      <div class="col-md-4">
        <div>
          <h3>Обратная связь</h3>
          <a id="Email"></a>
          <div class="input-group mb-3">
            <span class="input-group-text">Имя</span>
            <input id="dname" type="text" class="form-control" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">email</span>
            <input id="demail" type="text" class="form-control" />
            <span class="input-group-text">@example.com</span>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Благодарность</option>
            <option value="1">Ошибка</option>
            <option value="2">Письмо директору</option>
            <option value="3">Жалоба</option>
          </select>
          <p></p>
          <div>
            <label
              class="form-check-label"
              for="flexCheckIndeterminate"
            >Согласие на обработку персональных данных</label>&nbsp;
            <input class="form-check-input" type="checkbox" value id="flexCheckIndeterminate" />
          </div>
          <p></p>
          <div class="input-group">
            <textarea class="form-control" placeholder="Введите текст сообщения" aria-label="With textarea"></textarea>
            <button @click="sendform" class="btn btn-info">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Email",

  methods: {
    // валидация формы
    sendform() {
      var dn = document.getElementById("dname");
      var em = document.getElementById("demail");
      var ch = document.getElementById("flexCheckIndeterminate");

      if (dn.value == "") {
        alert("Пожалуйста, введите Ваше имя");
        return false;
      } else if (em.value == "") {
        alert("Пожалуйста, введите электронный адрес");
        return false;
      } else if (ch.checked == false) {
        alert("Предоставьте согласие на обработку персональных данных");
        return false;
      }
      alert("Письмо отправлено!!!");
      return true;
    },
  },
};
</script>

<style scoped>
.col-md-4 {
  text-align: left;
  margin: 50px 0 0 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
  text-indent: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 30em;
}
</style>