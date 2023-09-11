<template>
  <h1>elong-vant</h1>
  <EvInput required maxlength="3" label="elong-vant" />
  <EvInput required label="elong-vant" />
  <EvInput required label="elong-vant-slot"> 需要展示slot </EvInput>
  <EvSelect label="加签方式" :columns="apostilleTypeColumns" required />
</template>

<script setup lang="ts">
console.log(123);

// 加签方式
const apostilleTypeColumns = ref([
  { value: '1', text: '在我之前' },
  { value: '2', text: '在我之后' }
]);
</script>
