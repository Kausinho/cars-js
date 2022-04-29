<template>
    <div class="main">
        <div class="container">
            
            <div class="formulario">
                <h2>Cadastrar Carro</h2>
                <form action="">
                    <input type="text" name="cadastrar-marca" placeholder="Cadastrar Marca"/>
                    <input type="text" name="cadastrar-modelo" placeholder="Cadastrar Modelo" />
                    <button>Cadastrar!</button>
                </form>
            </div><!--formulario-->
        </div><!--container-->
    </div><!--main-->
</template>

<script>
export default {
    name: 'HomeCarros'
}
</script>

<style scoped>
    div.main .container{
        display: flex;
        flex-direction: column;
        width: 780px;
        margin-top: 10%;
        background-color: rgb(59, 61, 99);
        border-radius: 3px;
    }

    .formulario{
        padding: 20px;
    }

    .formulario h2{
        margin-bottom: 20px;
        text-align: center;
        color: white;
        text-transform: uppercase;
        font-weight: 400;
    }

    .formulario form{
        display: flex;
        flex-direction: column;
    }

    .formulario form input{
        padding: 10px;
        margin-bottom: 20px;
        border: 0;
        border-radius: 4px;
    }

    .formulario form input:focus{
        outline: 0;
    }

    .formulario button{
        width: 260px;
        padding: 6px;
        margin: 0 auto;
        margin-top: 10px;
        cursor: pointer;
        border-radius: 8px;
        border: 0;
        color: white;
        background-color: rgb(123, 128, 224);
        transition: .3s;
    }

    .formulario button:hover{
        background-color: rgba(123, 128, 224, 0.8);
    }
</style>