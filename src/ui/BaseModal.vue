<!--
    Компонент представляет из себя модальное окно, которое принимает заголовок и компонент или html разметку в слот.

    Принимает свойства:
        header?: string

    Возвращает событие:
        closeModal
-->

<template>
    <div
        class="modal__wrapper"
        @click="$emit('closeModal')"
    >
        <div
            @click.stop
            class="modal"
        >
            <div class="modal__head">
                <h2>{{ header }}</h2>
                <div
                    class="modal__close"
                    @click="$emit('closeModal')"
                >
                    <CloseIcon />
                </div>
            </div>
            <div class="modal__content">
                <slot> </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted} from 'vue'
import CloseIcon from 'src/assets/icons/close-icon.vue'

defineProps<{
    header?: string
}>()

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
    document.body.style.overflow = 'auto'
})
</script>

<style scoped lang="sass">
.modal__wrapper
    width: 100vw
    height: 100vh
    position: absolute
    z-index: 2
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center

    background-color: rgb(0, 0, 0, 0.5)
    overflow: hidden

.modal
    // width: 715rem
    // min-height: 697rem
    padding: 28rem 38rem

    background-color: $white


.modal__head
    margin-bottom: 32rem

.modal__close
    float: right
    cursor: pointer
    width: 28rem
    height: 28rem

    &>svg
        width: 100%
        height: 100%

h2
    display: inline-block
</style>
