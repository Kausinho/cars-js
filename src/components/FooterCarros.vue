<template>
    <footer>
        <h2>Todos os direitos reservados! &copy; 2022</h2>
    </footer>
</template>

<script>
export default {
    name: 'FooterCarros'
}
</script>

<style scoped>
    footer{
        width: 100%;
        padding: 20px;
        background-color: rgb(21, 23, 71);
        position: fixed;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    footer h2{
        color: white;
        font-weight: 300;
        font-size: 20px;
    }
</style>