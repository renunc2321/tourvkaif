<script setup>

</script>

<template>
  <label for="fileInput" class="text-[#FF8500] hover:underline">
    Выберите файл
    <input id="fileInput" type="file" @change="uploadFileAutomatically" class="hidden" />
  </label>
</template>
