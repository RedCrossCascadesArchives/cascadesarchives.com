<template>
  <div>
    <jet-banner />

    <div class="min-h-screen bg-gray-100">
      <nav class="bg-white border-b border-red-cross-gray-100">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <div class="flex-shrink-0 flex items-center">
                <inertia-link :href="route('home')">
                  <jet-application-mark class="block h-12 w-auto" />
                </inertia-link>
              </div>

              <!-- Navigation Links 
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 md:flex">
                <jet-nav-link
                  :href="route('archives')"
                  :active="route().current('archives')"
                >
                  The Archives
                </jet-nav-link>
              </div>
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 md:flex">
                <jet-nav-link
                  :href="route('lins_of_service')"
                  :active="route().current('lins_of_service')"
                >
                  Lines of Service
                </jet-nav-link>
              </div>
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 md:flex">
                <jet-nav-link
                  :href="route('lins_of_service')"
                  :active="route().current('timeline')"
                >
                  Timeline
                </jet-nav-link>
              </div>
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 md:flex">
                <jet-nav-link
                  :href="route('about')"
                  :active="route().current('history')"
                >
                  History
                </jet-nav-link>
              </div>-->
            </div>
            <!-- Search -->
            <div
              class="pt-2 relative ml-auto text-gray-600 my-1 hidden sm:flex"
            >
              <input
                class="border-1 border-red-cross-gray-100 bg-white h-10 px-5 pr-10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-cross-gray-300 focus:border-transparent"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" class="absolute right-0 top-0 mt-5 mr-4 focus:outline-none">
                <svg
                  class="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background: new 0 0 56.966 56.966"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </button>
            </div>
            <!-- Hamburger -->
            <div class="-mr-2 flex items-center sm:hidden">
              <button
                @click="showingNavigationDropdown = !showingNavigationDropdown"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    :class="{
                      hidden: showingNavigationDropdown,
                      'inline-flex': !showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    :class="{
                      hidden: !showingNavigationDropdown,
                      'inline-flex': showingNavigationDropdown,
                    }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Secoundary navigation bar -->
        <div class="hidden sm:flex bg-white border-t border-gray-300 bg-gray-50">
          <div class="max-w-7xl mx-auto justify-center">
            <div class="flex h-10">
              <!-- Navigation Links -->
              <div class="space-x-8 sm:-my-px sm:ml-10 flex">
                <jet-nav-link
                  :href="route('archives')"
                  :active="route().current('archives')"
                >
                  The Archives
                </jet-nav-link>
              </div>
              <div class="space-x-8 sm:-my-px sm:ml-10 flex">
                <jet-nav-link
                  :href="route('lins_of_service')"
                  :active="route().current('lins_of_service')"
                >
                  Lines of Service
                </jet-nav-link>
              </div>
              <div class="space-x-8 sm:-my-px sm:ml-10 flex">
                <jet-nav-link
                  :href="route('timeline')"
                  :active="route().current('timeline')"
                >
                  Timeline
                </jet-nav-link>
              </div>
              <div class="space-x-8 sm:-my-px sm:ml-10 flex">
                <jet-nav-link
                  :href="route('history')"
                  :active="route().current('history')"
                >
                  History
                </jet-nav-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Responsive Navigation Menu -->
        <div
          :class="{
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          }"
          class="sm:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <jet-responsive-nav-link
              :href="route('archives')"
              :active="route().current('archives')"
            >
              The Archives
            </jet-responsive-nav-link>
            <jet-responsive-nav-link
              :href="route('lins_of_service')"
              :active="route().current('lins_of_service')"
            >
              Lines of Service
            </jet-responsive-nav-link>
            <jet-responsive-nav-link
              :href="route('timeline')"
              :active="route().current('timeline')"
            >
              Timeline
            </jet-responsive-nav-link>
            <jet-responsive-nav-link
              :href="route('history')"
              :active="route().current('history')"
            >
              History
            </jet-responsive-nav-link>
          </div>
        </div>
      </nav>

      <!-- Page Heading -->
      <header class="bg-white shadow" v-if="$slots.header">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header"></slot>
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import JetApplicationMark from "@/Jetstream/ApplicationMark";
import JetBanner from "@/Jetstream/Banner";
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import JetNavLink from "@/Jetstream/NavLink";
import JetResponsiveNavLink from "@/Jetstream/ResponsiveNavLink";

export default {
  components: {
    JetApplicationMark,
    JetBanner,
    JetDropdown,
    JetDropdownLink,
    JetNavLink,
    JetResponsiveNavLink,
  },

  data() {
    return {
      showingNavigationDropdown: false,
    };
  },

  methods: {
    logout() {
      this.$inertia.post(route("logout"));
    },
  },
};
</script>
