<template>
    <inertia-link :href="href" :class="classes">
        <slot></slot>
    </inertia-link>
</template>

<script>
    export default {
        props: ['href', 'active'],

        computed: {
            classes() {
                return this.active
                            ? 'inline-flex items-center px-1 pt-1 border-b-2 border-red-cross-red text-base font-medium leading-5 text-gray-900 focus:outline-none focus:border-red-cross-red-600 transition'
                            : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-base font-medium leading-5 text-gray-600 hover:text-gray-800 hover:border-red-cross-gray focus:outline-none focus:text-gray-800 focus:border-red-cross-gray transition'
            }
        }
    }
</script>
