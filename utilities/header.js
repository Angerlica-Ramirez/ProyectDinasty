Vue.component('menu-componente',{
    template: `
    <div class="grid grid-cols-6 text-center text-white bg-black p-1 items-center">
        <div class="justify-center flex">
            <img class="m-0" src="/src/img/LOGO.webp" alt="logo" width="65" height="65"/>
        </div>
        <p>Dinasty Club</p>
        <p>Servicios</p>
        <p>Contacto</p>
        <p>Sucursal</p>
        <p>Redes</p>
     </div>
    `
})
new Vue({
    el: '#app'
})