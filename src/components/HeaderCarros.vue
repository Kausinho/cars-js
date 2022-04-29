<template>
    <nav class="menu">  
        <div class="container">
            <router-link to="/"><h2>Home</h2></router-link>
            <ul>
                <li><router-link to="/carros">Carros</router-link></li>
                <li><router-link to="/modelos">Modelos</router-link></li>
            </ul>
        </div><!--container-->
  </nav><!--menu-->
  <router-view />
</template>

<script>
export default {
    name: 'HeaderCarros'
}
</script>

<style scoped>
    nav.menu{
        background: rgb(21, 23, 71);
        padding: 20px;
    }
    nav.menu .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav.menu a{
        text-decoration: none;
        color: white;
    }

    nav.menu a h2{
        font-size: 30px;
        font-weight: 300;
    }

    nav.menu ul{
        display: flex;
        list-style-type: none;
    }

    nav.menu ul li{
        margin-left: 40px;
        flex-direction: row;
    }

    nav.menu li a{
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font-weight: 300;
    }
</style>