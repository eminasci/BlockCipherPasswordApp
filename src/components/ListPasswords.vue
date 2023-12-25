<template>
    <HeaderPage/>
    <div>
      <h2>Şifre Listesi</h2>
      <ul class="password-list">
        <li v-for="user in users" :key="user.id">
          <div>
          
            <h3>Hoş geldin {{ user.name }}</h3>
            <ul>
              <li v-for="password in user.sifreler" :key="password.id" class="password-item">
                <div>
                  <strong>{{ password.service }}</strong>
                  <p>ID:{{ password.id }}</p>
                  <p>Kullanıcı Adı: {{ password.username }}</p>
                  <p>Şifre:{{ password.password }}</p>
                </div>
                <div>
                  <!-- <button @click="editPassword(user, password)" class="edit-button">Düzenle</button> -->
                  <button @click="deletePassword(user, password)" class="delete-button">Sil</button>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderPage from './HeaderPage.vue';

  
  export default {
    data() {
        return {
            users: [],
        };
    },
    methods: {
      async fetchData() {
  try {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    if (userInfo) {
      const response = await axios.get(`http://localhost:3000/user/${userInfo.id}`);
      const userIndex = this.users.findIndex(u => u.id === userInfo.id);

      if (userIndex !== -1) {
        this.$set(this.users, userIndex, response.data); // Kullanıcı listesini güncelle
      } else {
        this.users.push(response.data); // Kullanıcı listesine ekle
      }
    }
  } catch (error) {
    console.error('Kullanıcı Bilgilerini Getirme Hatası:', error);
  }
},

        
        async deletePassword(user, password) {
  try {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    if (userInfo && user.id === userInfo.id) {
      console.warn(password);
      console.warn(password.id);

      await axios.delete(`http://localhost:3000/user/${user.id}/sifreler/${password.id}`);
      this.fetchData(); // Şifre silindikten sonra listeyi güncelle
    } else {
      console.error('Yetkisiz İşlem: Bu kullanıcının şifresini silemezsiniz.');
    }
  } catch (error) {
    console.error('Şifre Silme Hatası:', error);
  }
},
    },
    mounted() {
        this.fetchData(); // Sayfa yüklendiğinde kullanıcıları getir
    },
    components: { HeaderPage }
};
  </script>
  
  <style scoped>
  .password-list {
    list-style-type: none;
    padding: 0;
  }
  
  .password-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .edit-button,
  .delete-button {
    background-color: #3498db;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 5px;
  }
  
  .edit-button:hover,
  .delete-button:hover {
    background-color: #2980b9;
  }
  </style>
  