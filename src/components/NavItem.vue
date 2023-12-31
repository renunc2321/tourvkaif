<script>
export default {
  inheritAttrs: false
}
</script>

<template>
  <li>
    <a v-bind="$attrs" class="capitalize py-[18px] px-5 rounded-2xl w-[300px] bg-[#F8F8F8] block">
      <slot></slot>
    </a>
  </li>
</template>
