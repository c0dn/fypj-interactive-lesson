<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class=" bg-gray-800" v-slot="{ open }">
    <div class="flex justify-between">
      <a class="px-3 py-3" :href="backRoutes[$route.path]">
        <font-awesome-icon class="text-white text-2xl" icon="chevron-left"/>
      </a>
      <div class="px-3 py-2 flex justify-center flex-grow" v-for="item in navigation" :key="item.name">
        <router-link class="rounded-md text-sm font-bold text-xl text-white" v-if="$route.path === item.href"
                     :to="item.href">{{ item.name }}
        </router-link>
      </div>
    </div>
  </Disclosure>
  <router-view/>
</template>

<script>
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'

const navigation = [
  {name: 'CAM overflow Lesson', href: '/cam/'},
]
const backRoutes = {
  '/cam/': 'https://nypfypjelearning.gitbook.io/network-security-1/layer-2/cam-overflow',
}

export default {
  name: "App Base Nav",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
      backRoutes,
    }
  },
}
</script>

<style lang="postcss" scoped>
</style>