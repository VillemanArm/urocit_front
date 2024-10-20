<template>
    <div class="toolbar">
        <div class="toolbar__wrap">
            <BaseButton
                label="Скачать все отчеты"
                class="toolbar__download-reports"
                @click="reportsStore.getReportFile"
            >
                <DocumentIcon />
            </BaseButton>
            <div class="toolbar__filter">
                <FilterOption
                    label="По дате"
                    :optionActive="reportsStore.listRequestParameters.sortOption === 'date'"
                    :sortDirectionActive="reportsStore.listRequestParameters.sortDescending"
                    class="toolbar__filter-option"
                    @setDescending="
                        (direction) => {
                            reportsStore.setSortRequestParameters('date', direction)
                        }
                    "
                />
                <FilterOption
                    label="По пациенту"
                    :optionActive="reportsStore.listRequestParameters.sortOption === 'name'"
                    :sortDirectionActive="reportsStore.listRequestParameters.sortDescending"
                    class="toolbar__filter-option"
                    @setDescending="
                        (direction) => {
                            reportsStore.setSortRequestParameters('name', direction)
                        }
                    "
                />
                <FilterOption
                    label="По номеру исследования"
                    :optionActive="reportsStore.listRequestParameters.sortOption === 'number'"
                    :sortDirectionActive="reportsStore.listRequestParameters.sortDescending"
                    class="toolbar__filter-option"
                    @setDescending="
                        (direction) => {
                            reportsStore.setSortRequestParameters('number', direction)
                        }
                    "
                />
            </div>
        </div>
        <q-input
            outlined
            v-model.trim="reportsStore.listRequestParameters.searchQuery"
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
                    @click="reportsStore.listRequestParameters.searchQuery = ''"
                    class="cursor-pointer"
                />
            </template>
        </q-input>
    </div>
</template>

<script setup lang="ts">
import DocumentIcon from 'src/assets/icons/document-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import {useReportsStore} from '../ReportsStore'
import FilterOption from 'src/ui/FilterOption.vue'
import SearchIcon from 'src/assets/icons/search-icon.vue'
import CancelIcon from 'src/assets/icons/cancel-icon.vue'

const reportsStore = useReportsStore()
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
  display: grid
  grid-template-columns: 357rem 1fr
  align-items: center

.toolbar__add-button
  margin-right: 48rem

.toolbar__download-reports
  width: 236rem
  background-color: $secondary-color

  &:hover
    background-color: $primary-color

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
