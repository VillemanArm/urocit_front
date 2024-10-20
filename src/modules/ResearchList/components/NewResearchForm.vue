<template>
    <div class="form">
        <form
            class="form__fields"
            ref="newResearchForm"
        >
            <span class="form__label">Дата исследования</span>
            <span class="form__date">{{
                researchStore.newResearchData.researchDate.split('-').reverse().join('/')
            }}</span>
            <label
                for="researchNumber"
                class="form__label"
                >Номер исследования</label
            >
            <input
                class="form__input-field"
                type="text"
                id="researchNumber"
                name="researchNumber"
            />
            <label
                for="patientName"
                class="form__label"
                >Пациент (ФИО)</label
            >
            <input
                class="form__input-field"
                type="text"
                id="patientName"
                name="patientName"
            />
            <label
                for="patientAge"
                class="form__label"
                >Возраст</label
            >
            <input
                class="form__input-field"
                type="number"
                id="patientAge"
                name="patientAge"
                max="120"
                min="1"
            />
            <label
                for="institutionByReferral"
                class="form__label"
                >Направившее учреждение</label
            >
            <select
                class="form__input-field"
                id="institutionByReferral"
                name="institutionByReferral"
            >
                <option value=""></option>
                <option
                    v-for="(institution, index) of researchStore.newResearchData
                        .institutionsByReferral"
                    :value="institution"
                    :key="index"
                >
                    {{ institution }}
                </option>
            </select>
            <label
                for="doctorsName"
                class="form__label"
                >ФИО лечащего врача</label
            >
            <input
                class="form__input-field"
                type="text"
                id="doctorsName"
                name="doctorsName"
            />
            <label
                for="diagnosis"
                class="form__label"
                >Клинический диагноз</label
            >
            <input
                class="form__input-field"
                type="text"
                id="diagnosis"
                name="diagnosis"
            />
            <label
                for="comment"
                class="form__label"
                >Комментарий</label
            >
            <textarea
                class="form__input-field form__input-field--textarea"
                id="comment"
                name="comment"
            ></textarea>
        </form>
        <input
            type="file"
            id="file"
            name="file"
            class="form__input-file"
        />
        <div class="form__buttons">
            <BaseButton
                label="Сохранить"
                class="form__button"
                @click="handleSaveAndCloseClick"
            >
                <AddIcon />
            </BaseButton>
            <BaseButton
                label="Сохранить и остаться"
                class="form__button"
                @click="handleSaveAndStayClick"
            >
                <AddStayIcon />
            </BaseButton>
            <BaseButton
                label="Очистить"
                class="form__button form__button--outline"
                @click="handleResetClick"
            >
                <CancelIcon />
            </BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import BaseButton from 'src/ui/BaseButton.vue'
import {useResearchStore} from 'src/modules/ResearchList/ResearchStore'
import AddIcon from 'assets/icons/add-icon.vue'
import AddStayIcon from 'assets/icons/add-stay-icon.vue'
import CancelIcon from 'assets/icons/cancel-icon.vue'

const researchStore = useResearchStore()

const newResearchForm = ref()

const handleSaveAndCloseClick = async () => {
    const newResearchData: FormData = new FormData(newResearchForm.value)
    newResearchForm.value.reset()
    researchStore.isNewResearchForm = false
    await researchStore.addNewResearch(newResearchData)
    researchStore.resetNewResearchData()
    researchStore.getResearchList()
}

const handleSaveAndStayClick = () => {
    const newResearchData = new FormData(newResearchForm.value)
    newResearchForm.value.reset()
    researchStore.addNewResearch(newResearchData)
    researchStore.resetNewResearchData()
    researchStore.getResearchList()
}

const handleResetClick = () => {
    researchStore.resetNewResearchData()
    newResearchForm.value.reset()
}
</script>

<style scoped lang="sass">
.form
    width: 639rem

    font-size: 13rem

.form__fields
  display: grid
  grid-template-columns: 145rem 480rem
  gap: 16rem
  margin-bottom: 32rem

  label
    align-self: center

    &:nth-child(15)
      margin-top: 10rem
      align-self: start


.form__label
  color: $secondary-font-color

.form__input-field
  height: 36rem
  padding: 10rem 16rem

  border: 1rem solid $border-color
  border-radius: 2rem
  outline: none

  &:focus
    border: 2rem solid $primary-color

.form__input-field--textarea
  height: 72rem
  resize: none

.form__input-file
  width: 100%
  font-weight: bold

  &::file-selector-button
    height: 26rem
    width: 145rem
    margin-bottom: 32rem
    margin-right: 16rem

    font-weight: bold

    background-color: $peachly
    border: none
    border-radius: 4rem
    cursor: pointer

    &:hover
      background-color:$tretiary-color

.form__buttons
  display: flex
  gap: 16rem

.form__button--outline
  background-color: transparent
  color: $secondary-font-color

  border: 1rem solid $secondary-font-color

  &:hover
    background-color: $primary-color
    border-color: $primary-color
</style>
