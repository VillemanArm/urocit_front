<template>
    <div class="toolbar">
        <BaseButton
            label="Добавить исследование"
            class="toolbar__add-button"
            @click="handleResearchAddClick"
        >
            <AddIcon />
        </BaseButton>
        <div class="toolbar__filter">
            <FilterOption
                label="По дате"
                :optionActive="researchStore.listRequestParameters.sortOption === 'date'"
                :sortDirectionActive="researchStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        researchStore.setSortRequestParameters('date', direction)
                    }
                "
            />
            <FilterOption
                label="По пациенту"
                :optionActive="researchStore.listRequestParameters.sortOption === 'name'"
                :sortDirectionActive="researchStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        researchStore.setSortRequestParameters('name', direction)
                    }
                "
            />
            <FilterOption
                label="По номеру исследования"
                :optionActive="researchStore.listRequestParameters.sortOption === 'number'"
                :sortDirectionActive="researchStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        researchStore.setSortRequestParameters('number', direction)
                    }
                "
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import AddIcon from 'src/assets/icons/add-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import {useResearchStore} from 'src/modules/ResearchList/ResearchStore'
import FilterOption from 'src/ui/FilterOption.vue'

const researchStore = useResearchStore()

const handleResearchAddClick = () => {
    researchStore.isNewResearchForm = true
    researchStore.getNewResearchData()
}
</script>

<style scoped lang="sass">
.toolbar
  width: 100%
  padding: 8rem 32rem
  display: flex
  margin-bottom: 16rem

  background-color: $background-color

.toolbar__add-button
  margin-right: 64rem

.toolbar__filter
  display: flex

.toolbar__filter-option
  &:first-child
    border-top-left-radius: 8rem
    border-bottom-left-radius: 8rem

  &:last-child
    border-top-right-radius: 8rem
    border-bottom-right-radius: 8rem
</style>
