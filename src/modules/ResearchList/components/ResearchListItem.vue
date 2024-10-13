<template>
    <div class="item">
        <span>{{ researchItem.researchDate.split('-').reverse().join('/') }}</span>
        <span>Исследование №{{ researchItem.researchNumber }}</span>
        <span>{{ researchItem.patientName }}</span>
        <BaseButton
            class="item__button"
            label="Начать анализ"
            @click="handleAnalysisButtonClick"
        >
            <AiIcon />
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import BaseButton from 'src/ui/BaseButton.vue'
import AiIcon from 'src/assets/icons/ai-icon.vue'
import {useResearchStore} from '../ResearchStore'
import {ResearchItem} from '../research.dto'

const props = defineProps<{
    researchItem: ResearchItem
}>()

const handleAnalysisButtonClick = () => {
    researchStore.startAnalysis(props.researchItem.id)
    researchStore.getResearchList()
}

const researchStore = useResearchStore()
</script>

<style scoped lang="sass">
.item
  width: 1051rem
  min-height: 55rem
  padding: 0 16rem
  display: grid
  grid-template-columns: 120rem 240rem 380rem 1fr
  column-gap: 32rem

  border-radius: 8rem
  border: 1px solid $border-color
  text-decoration: none

  transition: all 0.3s ease-in-out

  &:hover
    border-color: $border-color

  & span
    align-self: center
    justify-self: start
    display: inline-block

.item__button
  // width: 220rem
  padding: 8rem 16rem
  align-self: center

  font-size: 16rem

  &>svg
    width: 24rem
    height: 24rem
</style>
