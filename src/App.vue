<template>
 
 <router-view />

</template>

<script>



export default {
  name: 'App',
  
    
  
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body{
    margin: 0;
    padding: 0;
}
.logo{
    width:300px;
}
.register input, .login input,.add_scholl input{ 
    width: 300px;
    height: 50px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top:50px ;
   
    border: 1px solid red;
    font-size: medium;
    
   


    
}
.register
.register ::placeholder{
    font-size: medium;
    
    
}

.register button, .login button, .add_scholl button{
    width: 320px;
    height: 40px;
    border: 1px solid red;
    background-color: rgb(255, 1, 1);
    color: white;
    cursor: pointer;
    
}
</style>
