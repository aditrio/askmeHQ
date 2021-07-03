<template>
  <v-app class="bg">
    <v-app-bar
      app
      dense
      color="grey darken-4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/askme.png"
          transition="scale-transition"
          width="120"
        />

        
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-item class="mr-3">
        <v-btn
        color="purple darken-4"
          elevation="2"
          @click="$router.push('/')"
        >Home</v-btn>
      </v-toolbar-item>
      <v-toolbar-item class="mr-3">
        <v-btn
        color="purple darken-4"
          elevation="2"
          @click="$router.push('/about')"
        >Tentang</v-btn>
      </v-toolbar-item>
      
    </v-app-bar>

    <v-main>
      <router-view/>
      <br>
      <br>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

.bg {
    background-image: url('assets/bg.svg') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

.v-application {
    font-family: 'Noto Sans JP', sans-serif !important;
    line-height: 1.5;
}

</style>