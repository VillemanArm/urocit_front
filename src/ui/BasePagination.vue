<!--
  Компонент представляет из себя пагинацию с активными номерами страниц с кнопками вперед и назад.
  Принимает свойства:
  maxPage: number
  currentPage: number

  Возвращает событие
  changePage (pageNumber: number)
 -->

<template>
    <div class="pagination">
        <div
            :class="{pagination__arrow: true, pagination__arrow_active: currentPage !== 1}"
            @click="handleClick(currentPage - 1)"
        >
            <LeftIcon />
        </div>

        <div
            v-for="page in maxPage"
            :key="page"
        >
            <div
                v-if="
                    page === 1 ||
                    page === maxPage ||
                    (page <= currentPage + 2 && page >= currentPage - 2)
                "
                :class="{
                    pagination__button: true,
                    pagination__button_active: page === currentPage,
                }"
                @click="handleClick(page)"
            >
                <div>{{ page }}</div>
            </div>
            <div
                v-else-if="page === currentPage + 3 || page === currentPage - 3"
                class="pagination__skip"
            >
                <div>...</div>
            </div>
        </div>

        <div
            :class="{pagination__arrow: true, pagination__arrow_active: currentPage !== maxPage}"
            @click="handleClick(currentPage + 1)"
        >
            <RightIcon />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
//import {useRoute, useRouter} from 'vue-router'
import LeftIcon from 'src/assets/icons/left-icon.vue'
import RightIcon from 'src/assets/icons/right-icon.vue'

const props = defineProps<{
    currentPage: number
    maxPage: number
}>()

const emit = defineEmits(['changePage'])

const handleClick = (pageNumber: number) => {
    if (pageNumber !== props.currentPage && pageNumber <= props.maxPage && pageNumber >= 1) {
        emit('changePage', pageNumber)
    }
}
</script>

<style scoped lang="sass">
.pagination
    margin-bottom: 16rem
    display: flex
    align-items: center
    gap: 4rem

.pagination__button
    width: 32rem
    height: 32rem
    display: flex
    align-items: center
    justify-content: center

    border-radius: 2rem
    cursor: pointer
    color: $primary-font-color
    background-color: $background-color

    transition: all 0.25s ease-in-out

    &:hover
        background-color: $secondary-color
        color: $primary-font-color

.pagination__button_active
    background-color: $secondary-color
    color: $primary-font-color

.pagination__skip
    width: 32rem
    height: 32rem
    display: flex
    align-items: center
    justify-content: center

.pagination__arrow
    width: 32rem
    height: 32rem
    display: flex
    align-items: center
    justify-content: center

    transition: all 0.25s ease-in-out

.pagination__arrow_active:hover
    background-color: $secondary-color
    cursor: pointer
    border-radius: 2rem

    &>svg
        stroke: $primary-font-color
</style>
