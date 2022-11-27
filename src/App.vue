<template>
  <v-app>
    <v-main>
      <div class="container">
        <h2 class="header">«Город сыра и мира»</h2>
        <ul class="list">
          <li v-for="(item, i) in firstRowData" :key="i" class="list__item">
            <v-icon class="list__icon-separator">mdi-circle-small</v-icon>
            <v-icon
              v-if="item.icon"
              v-text="item.icon"
              class="list__icon"
            ></v-icon>
            <span>{{ item.text }}</span>
          </li>
        </ul>
        <h2 class="header">Экскурсия в национальный парк «Куршская коса»</h2>
        <ul class="list">
          <li v-for="(item, i) in secondRowData" :key="i" class="list__item">
            <v-icon class="list__icon-separator">mdi-circle-small</v-icon>
            <v-icon
              v-if="item.icon"
              v-text="item.icon"
              class="list__icon"
            ></v-icon>
            <span>{{ item.text }}</span>
          </li>
        </ul>
        <h2 class="header">«О Кирах, рыцарях и замках»</h2>
        <div class="list wide">
          <div v-for="(item, i) in secondRowData" :key="i" class="list__item">
            <v-icon class="list__icon-separator">mdi-circle-small</v-icon>
            <div class="list__content">
              <v-icon v-if="item.icon" v-text="item.icon" class="list__icon"></v-icon>
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    firstRowData() {
      return this.$store.state.waypoint1;
    },
    secondRowData() {
      return this.$store.state.waypoint2;
    },
    thirdRowData() {
      return this.$store.state.waypoint3;
    },
  },
};
</script>

<style lang="scss">
* {
  font-family: "Montserrat", sans-serif !important;
}

.container {
  padding: 20px;
}

.header {
  // color: rgb(205, 85, 41);
  margin-bottom: 10px;
}

.list {
  list-style: none;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 40px;
  padding: 0 0 10px 0 !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;

  &__icon {
    padding-right: 5px;
  }

  &__icon-separator {
    margin: 0 px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 0 !important;
    margin-bottom: 20px;
  }

  &__item:first-child {
    .list__icon-separator,
    .list__separator {
      display: none !important;
    }
  }

  &.wide {
    width: 100%;
    display: contents;

    .list__item {
      display: flex;
    }

    .list__separator {
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .list__content {
      min-width: fit-content;
    }
  }
}
</style>
