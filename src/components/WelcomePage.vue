<template>
     <HeaderPage/>
    <div class="welcome-page">
      <div class="welcome-container">
        <div class="welcome-header">
          <h2>Hoş Geldin</h2>
          <p>{{ userInfo.name }}, uygulamaya başarıyla giriş yaptınız!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 
import HeaderPage from './HeaderPage.vue';
  export default {
    data() {
        return {
            userInfo: JSON.parse(localStorage.getItem('user-info')) || {},
        };
    },
    components: { HeaderPage }
};
  </script>
  
  <style scoped>
  .welcome-page {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  }
  
  .welcome-container {
    max-width: 600px;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .welcome-header h2 {
    color: #3498db;
  }
  
  .welcome-header p {
    font-size: 18px;
    color: #555;
  }
  </style>
  