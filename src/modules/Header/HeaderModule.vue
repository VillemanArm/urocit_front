<template>
    <header class="header container">
        <RouterLink to="/">
            <div class="header__logo">
                <img
                    src="~assets/img/logo.svg"
                    alt="Urocit"
                />
            </div>
        </RouterLink>
        <div class="header-nav">
            <router-link
                to="/research"
                :class="{header__link: true, 'header__link--active': $route.path === '/research'}"
            >
                Исследования
            </router-link>
            <router-link
                to="/reports"
                :class="{header__link: true, 'header__link--active': $route.path === '/reports'}"
            >
                Отчеты
            </router-link>
        </div>
        <div class="header__toolbar">
            <div class="header__icon">
                <BellIcon />
            </div>
            <div class="header__user">
                <div class="header__user-avatar">
                    <img
                        src="~assets/img/user.png"
                        alt=""
                    />
                </div>
                <span>Киселев И.В.</span>
            </div>
            <router-link
                to="/"
                class="header__icon"
            >
                <InfoIcon />
            </router-link>
            <router-link
                to="/"
                class="header__icon"
            >
                <SettingsIcon />
            </router-link>
        </div>
    </header>
</template>

<script setup lang="ts">
import BellIcon from 'src/assets/icons/bell-icon.vue'
import InfoIcon from 'src/assets/icons/info-icon.vue'
import SettingsIcon from 'src/assets/icons/settings-icon.vue'

defineOptions({
    name: 'MainLayout',
})
</script>

<style lang="sass">
.header
  padding: 22rem 32rem
  display: grid
  grid-template-columns: 325rem 1fr auto
  align-items: center

.header__logo
  width: 141rem
  height: 65rem

.header-nav
  display: flex
  gap: 67rem

  font-size: 20rem

.header__link
  color: $secondary-font-color

  &:hover
    color: $primary-font-color

  &--active
    color: $primary-font-color
    text-decoration: underline

.header__toolbar
  display: flex
  align-items: center
  gap: 8rem

.header__icon
  width: 32rem
  height: 32rem

  cursor: pointer

.header__user
  display: flex
  align-items: center
  gap: 8rem

  cursor: pointer

  span
    width: 139rem

.header__user-avatar
  width: 48rem
  height: 48rem
  border-radius: 50%
</style>
