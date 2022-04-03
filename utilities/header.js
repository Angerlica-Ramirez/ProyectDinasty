Vue.component('menu-componente', {
    template: `
<nav class=" text-center text-white bg-black py-2.5">
    <div class="container-fluid flex justify-around items-center">
        <a href="" class="flex items-center md:ml-2">
            <img src="/src/img/LOGO.webp" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-yellow-500">Dinasty Club</span>
        </a>
        <div class="hidden items-center w-auto md:flex md:order-1">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <a href="" class="border-transparent border-b-2 hover:border-yellow-500">
                    <li>Nosotros</li>
                </a>
                <a href="" class="border-transparent border-b-2 hover:border-yellow-500">
                    <li>Servicios</li>
                </a>
                <a href="" class="border-transparent border-b-2 hover:border-yellow-500">
                    <li>Sucursales</li>
                </a>
            </ul>
        </div>
        <div class="flex items-center md:order-2">
            <ul class="flex flex-row space-x-3 mt-0 text-sm md:space-x-8">
                <a href="">
                    <li>
                        <svg class="w-5 h-5 text-white fill-current hover:fill-current hover:text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </li>
                </a>
                <a href="">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="ionicon w-5 h-5 text-white fill-current hover:fill-current hover:text-yellow-500"
                            viewBox="0 0 512 512">
                            <title>Logo Instagram</title>
                            <path
                                d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                            <path
                                d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                        </svg>

                    </li>
                </a>
                <a href="">
                    <li>
                        <svg class="w-5 h-5 text-white fill-current hover:fill-current hover:text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                            </path>
                        </svg>

                    </li>
                </a>
            </ul>
        </div>
    </div>
</nav>
    `
})
new Vue({
    el: '#app'
})