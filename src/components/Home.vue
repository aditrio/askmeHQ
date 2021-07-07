<template>
  <v-container>
    <v-row class="mt-5">
      <v-col align="center">
        <img src="@/assets/askme.png" alt="" width="20%" />
        <p>
          Membantumu menemukan apa yang kamu cari <br />
          ( Hadits & Al-Quran )
        </p>
      </v-col>
    </v-row>

    <!-- <v-divider></v-divider> -->

    <v-row class="mt-2" justify="center">
      <v-col cols="6">
        <v-text-field
          append-icon="mdi-magnify"
          solo
          label="Cari disini yaa ..."
          clearable
          v-model="keywords"
          @click:append="search"
        ></v-text-field>

        <v-divider></v-divider>
      </v-col>
    </v-row>
    <br />
    <v-row justify="center">
      <v-col cols="10">
        <template>
          <v-tabs
            fixed-tabs
            color="purple darken-4"
            dark
            v-model="tab"
            style="border-top-right-radius: 15px; border-top-left-radius: 15px"
          >
            <v-tabs-slider color="secondary"></v-tabs-slider>
            <v-tab
              style="border-top-left-radius: 15px"
              href="#hadits"
              active-class="isActive"
              >Hadits</v-tab
            >
            <v-tab href="#alquran" active-class="isActive">Al-Quran</v-tab>
            <v-tab
              style="border-top-right-radius: 15px"
              href="#lainnya"
              active-class="isActive"
              >Lainnya</v-tab
            >
          </v-tabs>
        </template>
        <br />
        <v-tabs-items v-model="tab" style="border-top: #4a148c 2px solid">
          <v-tab-item value="hadits">
            <v-card flat>
              <v-card-text align="center">Hadits nya ada disini</v-card-text>
            </v-card>
            <v-expansion-panels inset>
              <v-expansion-panel v-for="(item, i) in listHadits" :key="i">
                <v-expansion-panel-header
                  style="border-left: #4a148c 1px solid"
                  >{{ item.kitab }}</v-expansion-panel-header
                >
                <v-expansion-panel-content
                  style="border-left: #4a148c 1px solid"
                >
                  <p>No Hadits:</p>
                  <v-chip-group active-class="primary--text" column>
                    <v-chip v-for="tag in item.id" :key="tag">
                      {{ tag }}
                    </v-chip>
                  </v-chip-group>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-tab-item>
          <v-tab-item value="alquran">
            <v-card flat>
              <v-card-text align="center"
                >kalau Al-Quran nya ada disini</v-card-text
              >
            </v-card>
          </v-tab-item>
          <v-tab-item value="lainnya">
            <v-card flat>
              <v-card-text align="center"
                >Referensi tambahan bisa aja ada disini</v-card-text
              >
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      tab: null,
      keywords: "",
      show: false,
      listHadits: [],
    };
  },
  methods: {
    search() {
      this.$store.dispatch("getHadits", this.keywords);
      this.keywords = "";
    },
  },

  computed: {
    getListHadits() {
      return this.$store.getters["getListHadits"];
    },
  },

  watch: {
    getListHadits(val) {
      this.listHadits = val;
    },
  },
};
</script>

<style scoped>
.isActive {
  background-color: #4a148c;
  color: white !important;
}
</style>