<template>
    <div class="toolbar">
        <div class="toolbar__wrap">
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
        <q-input
            outlined
            v-model.trim="researchStore.listRequestParameters.searchQuery"
            placeholder="Поиск"
            dense
            square
            class="toolbar__search-input"
        >
            <template v-slot:prepend>
                <SearchIcon />
            </template>
            <template v-slot:append>
                <CancelIcon
                    name="close"
                    @click="researchStore.listRequestParameters.searchQuery = ''"
                    class="cursor-pointer"
                />
            </template>
        </q-input>
    </div>
</template>

<script setup lang="ts">
import AddIcon from 'src/assets/icons/add-icon.vue'
import SearchIcon from 'src/assets/icons/search-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import CancelIcon from 'src/assets/icons/cancel-icon.vue'
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
  margin-bottom: 16rem
  display: flex
  align-items: center
  justify-content: space-between

  background-color: $background-color

.toolbar__wrap
  display: flex
  align-items: center

.toolbar__add-button
  margin-right: 48rem

.toolbar__filter
  padding: 0rem 16rem
  display: flex
  gap: 60rem

.toolbar__search-input
  width: 390rem

:deep(.q-field--dense .q-field__control, .q-field--dense .q-field__marginal)
  height: 46rem

  svg
    width: 24rem
    height: 24rem
</style>
