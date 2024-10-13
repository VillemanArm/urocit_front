<!--
  Кнопка принимает следующие параметры:
  label?: string
  иконку в слот
 -->
<template>
    <button
        type="button"
        class="base-button"
    >
        <slot></slot>
        <span>{{ label }}</span>
    </button>
</template>

<script setup lang="ts">
defineProps<{
    label?: string
}>()
</script>

<style scoped lang="sass">
.base-button
  padding: 14rem 18rem 14rem 14rem
  display: flex
  align-items: center
  gap: 6rem

  font-size: 18rem
  font-weight: 600
  line-height: 100%

  border-radius: 4rem
  background-color: $primary-color
  color: $white
  cursor: pointer

  transition: all 0.25s ease-in-out

  &:hover
    background-color: $tretiary-color

  &>svg
    width: 24rem
    height: 24rem

    fill: $white !important
    color: $white


  &>span
    display: inline-block
</style>
