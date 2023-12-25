<!-- <template>
    <div class="header">
      <div class="logo-container">
        <img class="logo" src="../assets/mebLogo.png" alt="MEB Logo" />
      </div>
      <div class="nav">
        <router-link to="/">Ana Sayfa</router-link>
        <router-link to="/add-scholl">Okul Ekle</router-link>
        <a v-on:click="logout" href="#">Çıkış Yap</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderPage',
    methods: {
      logout() {
        localStorage.clear();
        this.$router.push({ name: 'LoginPage' });
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #3498db;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo-container {
    margin-right: 20px;
  }
  
  .logo {
    width: 60px; /* Ölçüleri ihtiyacınıza göre ayarlayabilirsiniz */
  }
  
  .nav {
    display: flex;
  }
  
  .nav a {
    color: #fff;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    padding: 10px;
    margin-right: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav a:hover {
    background: #2c3e50;
  }
  </style> -->
  <template>
    <div class="header">
      <div class="logo-container">
        <img class="logo" src="../assets/lock.png" alt="MEB Logo" />
      </div>
      <div class="nav">
    Giriş yapıp şifrelerinizi güvenle saklayabilirsiniz
     </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderPage',
    methods: {
      logout() {
        localStorage.clear();
        this.$router.push({ name: 'LoginPage' });
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #3498db;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo-container {
    margin-right: 20px;
  }
  
  .logo {
    width: 60px;
  }
  
  .nav {
    display: flex;
    align-items: center;
    margin-right:30%;
   color:  #fff;
  }
  
  .nav-link {
    color: #fff;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    padding: 10px;
    margin-right: 50px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .divider {
    height: 20px;
    width: 1px;
    background-color: #fff;
    margin: 0 10px;
  }
  
  .nav-link:hover {
    background: #2c3e50;
    cursor: pointer;
  }
  </style>
  