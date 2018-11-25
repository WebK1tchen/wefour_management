<template>
  <html>

  <head>
    <title>Brief</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
  </head>

  <body>
    <v-app>
      <v-container class="white" fluid grid-list-x1>
        <v-stepper v-model="e1">

          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" color="black">ШАГ 1</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2" color="black">ШАГ 2</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3" color="black">ШАГ 3</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 4" step="4" color="black">ШАГ 4</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="5" color="black">ШАГ 5</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-layout column>
                <v-flex>
                  <div class="form-container">
                    <h1>О КОМПАНИИ</h1>
                    <p class="form-container__description">Расскажите немного о себе и<br>вашей компании</p>
                    <v-text-field color="black" v-model="companyName" label="Название компании"></v-text-field>
                    <v-text-field color="black" v-model="offerInfo" label="Информация о продуктах и(или) услугах"></v-text-field>
                    <v-text-field color="black" v-model="destAud" label="Целевая аудитория"></v-text-field>
                    <v-text-field color="black" v-model="personality" label="Фамилия Имя Отчество"></v-text-field>
                    <v-text-field color="black" v-model="email" label="Email"></v-text-field>
                    <v-text-field color="black" v-model="phone" label="Номер телефона"></v-text-field>
                  </div>
                </v-flex>
                <v-flex>
                  <v-btn color='black' class="white--text" block @click="e1 = 2">Вперёд</v-btn>
                </v-flex>
              </v-layout>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-layout column>
                <div class="form-container">
                  <h1>Фирменный стиль</h1>
                  <p class="form-container__description">
                    Предоставьте информацию о существующем фирменным<br>
                    стиле вашей компании. Отметьте то, что у вас есть<br>
                    и прикрепите исходних в SVG. Если есть необходимость<br>
                    в разработке, укажите нюансы в соответсвующих текстовых полях.
                  </p>
                  <v-checkbox color="black" v-model="enabled1" hide-details class="shrink mr-2"></v-checkbox>
                  <v-text-field color="black" :disabled="!enabled1" label="Логотип"></v-text-field>
                  <v-checkbox color="black" v-model="enabled2" hide-details class="shrink mr-1"></v-checkbox>
                  <v-text-field color="black" :disabled="!enabled2" label="Фирменные цвета"></v-text-field>
                  <v-checkbox color="black" v-model="enabled3" hide-details class="shrink mr-1"></v-checkbox>
                  <v-text-field color="black" :disabled="!enabled3" label="Фирменный стиль (Айдентика)"></v-text-field>
                  <v-checkbox color="black" v-model="enabled4" hide-details class="shrink mr-1"></v-checkbox>
                  <v-text-field color="black" :disabled="!enabled4" label="Фирменные персонажы, образы"></v-text-field>
                  <v-flex d-flex>
                    <v-btn color='black' class="white--text" @click="e1 = 1">Назад</v-btn>
                    <v-btn color='black' class="white--text" @click="e1 = 3">Вперёд</v-btn>
                  </v-flex>
                </div>
              </v-layout>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-layout column>
                <div class="form-container">
                  <h1>ТИП САЙТА</h1>
                  <p class="form-container__description">
                    Какой тип сайта вам<br>необходим?
                  </p>
                  <v-flex d-flex>
                    <v-btn color='black' class="white--text" @click="e1 = 2">Назад</v-btn>
                    <v-btn color='black' class="white--text" @click="e1 = 4">Вперёд</v-btn>
                  </v-flex>
                </div>
              </v-layout>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-layout column>
                <div class="form-container">
                  <h1>ДИЗАЙН САЙТА</h1>
                  <p class="form-container__description">
                    Помогите нам сделать ваш сайт<br>красивым
                  </p>
                  <v-text-field color="black" label="Укажите адреса сайтов, которые вам нравятся по дизайну либо по другим параметрам"></v-text-field>
                  <v-text-field color="black" label="Укажите адреса сайтов, которые вам НЕ нравятся по дизайну либо по другим параметрам"></v-text-field>
                  <v-text-field color="black" label="Цветовая гамма"></v-text-field>
                  <v-text-field color="black" label="Целевая аудитория"></v-text-field>
                  <v-text-field color="black" label="Насыщенность анимации"></v-text-field>
                  <v-text-field color="black" label="Иконки"></v-text-field>
                  <v-textarea box name="input-7-4" label="Дополнительные пожелания по дизайну" auto-grow value="Что бы вы еще хотели у себя видеть?"
                    color="black"></v-textarea>
                  <v-flex d-flex>
                    <v-btn color='black' class="white--text" @click="e1 = 3">Назад</v-btn>
                    <v-btn color='black' class="white--text" @click="e1 = 5">Вперёд</v-btn>
                  </v-flex>
                </div>
              </v-layout>
            </v-stepper-content>
            <v-stepper-content step="5">
              <v-layout column>
                <div class="form-container">
                  <h1>МОДУЛИ САЙТА</h1>
                  <p class="form-container__description">
                    Выберите необходимые функции
                  </p>
                  <v-checkbox color="black" label="Поиск по сайту" v-model="siteSearch"></v-checkbox>
                  <v-checkbox color="black" label="Поиск по каталогу товаров и услуг с заданием параметров(расширенный поиск)"
                    v-model="wideSearch"></v-checkbox>
                  <v-checkbox color="black" label="Подписка, рассылка" v-model="follow"></v-checkbox>
                  <v-checkbox color="black" label="Онлайн оплата" v-model="onlinePayment"></v-checkbox>
                  <v-checkbox color="black" label="Каталог товаров" v-model="catalog"></v-checkbox>
                  <v-checkbox color="black" label="Голосование(Опросы)" v-model="votes"></v-checkbox>
                  <v-checkbox color="black" label="Техподдержка(онлайн консультации" v-model="techSupport"></v-checkbox>
                  <v-checkbox color="black" label="Реклама(управление баннерами)" v-model="marketing"></v-checkbox>
                  <v-checkbox color="black" label="Фотогалерея / портфолио" v-model="checkbox10"></v-checkbox>
                  <v-textarea box name="input-7-4" label="Другое (укажите необходимые функции)" auto-grow value="Что бы вы еще хотели у себя видеть?"
                    color="black"></v-textarea>
                  <v-flex d-flex>
                    <v-btn color='black' class="white--text" @click="e1 = 4">Назад</v-btn>
                  </v-flex>
                </div>
              </v-layout>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-container>
    </v-app>
  </body>

  </html>
</template>

<script>
/* eslint-disable */
  export default {
    data() {
      return {
        e1: 0,
        enabled1: false,
        enabled2: false,
        enabled3: false,
        enabled4: false,
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false,
        checkbox10: false
      }
    }
  }

</script>

<style scoped>
  @font-face {
    font-family: 'Agency FB Bold', arial;
    src: url('http://allfont.ru/allfont.css?fonts=agency-fb-bold');
  }

  @font-face {
    font-family: 'Agency FB', arial;
    src: url('http://allfont.ru/allfont.css?fonts=agency-fb');
  }

  @font-face {
    font-family: "BicubikRegular";
    src: url("../assets/fonts/Bicubik/BicubikRegular/BicubikRegular.eot");
    src: url("../assets/fonts/Bicubik/BicubikRegular/BicubikRegular.eot?#iefix")format("embedded-opentype"),
      url("../assets/fonts/Bicubik/BicubikRegular/BicubikRegular.woff") format("woff"),
      url("../assets/fonts/Bicubik/BicubikRegular/BicubikRegular.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  h1 {
    font-size: 70px;
    width: 100%;
    text-align: center;
    font-family: "BicubikRegular";
    transform: scaleX(.8);
    font-weight: lighter;
    color: black;
  }

  .form-container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
  }

  .form-container__description {
    font-size: 20px;
    text-align: center;
    font-family: 'Agency FB Bold', arial;
    color: black;
  }

  @media screen and (max-width: 776px) {
    h1 {
      font-size: 35px;
    }

    .form-container__description {
      font-size: 13px;
    }
  }

</style>
