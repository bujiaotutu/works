<template>
  <div class="app-container">
    {{ info.name }}
  </div>
</template>
<script setup>
import { useUserStore } from "@/store/modules/user";
import { reactive } from "vue";
const userStore = useUserStore();
const info = reactive({ name: "test" });
info.name = userStore.getName;
// 将info存入localStorage中
localStorage.removeItem("info");

</script>
