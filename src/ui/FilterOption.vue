<!--
  Компонент представляет из себя универсальную кнопку для установки фильтра
  Принимает параметры:
    label: string
    optionActive: boolean
    sortDirectionActive: boolean

  Возвращает события:
    setDescending(value: boolean) - установка сортировки с указанием по направлению убывания или нет
 -->

<template>
    <div
        :class="{
            option: true,
            'option--active': optionActive,
        }"
    >
        <span>{{ label }}</span>
        <div class="sort-direction">
            <ArrowUpIcon
                @click="$emit('setDescending', false)"
                :class="{
                    'sort-direction--active': optionActive && !sortDirectionActive,
                }"
            />
            <ArrowDownIcon
                @click="$emit('setDescending', true)"
                :class="{
                    'sort-direction--active': optionActive && sortDirectionActive,
                }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowDownIcon from 'src/assets/icons/arrow-down-icon.vue'
import ArrowUpIcon from 'src/assets/icons/arrow-up-icon.vue'

defineProps<{
    label: string
    optionActive: boolean
    sortDirectionActive: boolean
}>()
</script>

<style scoped lang="sass">
.option
  display: flex
  gap: 12rem
  align-items: center

  font-size: 16rem
  font-weight: 500

  color: $secondary-font-color

  transition: all 0.25s ease-in-out

  &:hover
    color: $primary-font-color

  &--active
    color: $primary-font-color

.sort-direction
  display: grid
  gap: 8rem

  & svg
    width: 12rem
    height: 12rem

    cursor: pointer
    fill: $secondary-font-color

    &:hover
      fill: $primary-font-color
</style>
