<template>
    <nav  class="bg-white fixed left-0 right-0  border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <span class="flex text-center text-lime-50 text-3xl">
                Shopping Cart
            </span>
            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <nuxt-link class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                        md:hover:text-blue-700 md:p-0 dark:text-gray-400
                        md:dark:hover:text-white dark:hover:bg-gray-700
                        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/">
                        <fa icon="home"/> Home
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="block py-2 pr-4 pl-3 text-gray-700 border-b
                        border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                        md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white
                            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                            dark:border-gray-700" to="/Basket">
                            <fa icon="shopping-basket"/> Basket
                            </nuxt-link>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:'Header',
    head() {
        return{
            title:'Shopping Cart'
        }
    },
}
</script>

<style scoped>
.navbarx{
display: flex;
justify-content: start;
}
</style>
