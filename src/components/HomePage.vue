<template>
  <div>
    <HeaderPage/>
    <div>
      <h2>Şifre Ekle/Güncelle</h2>
      <form @submit.prevent="savePassword" class="password-form">
        <label for="service">Hizmet İsmi:</label>
        <input type="text" v-model="service" required />

        <label for="username">Kullanıcı Adı:</label>
        <input type="text" v-model="username" required />

        <label for="password">Şifre:</label>
        <input type="password" v-model="password" required />

        <label for="encryptionKey">Şifreleme Anahtarı:</label>
        <input type="number" v-model="encryptionKey" required />

        <button type="submit">Kaydet</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
import crypto from 'crypto-browserify';

export default {
  data() {
    return {
      service: '',
      username: '',
      password: '',
      encryptionKey: '', // New input for the encryption key
      passwordId: '',
    };
  },
  methods: {
    async savePassword() {
  try {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const timestamp = new Date().getTime();

    const plaintextPassword = this.service + this.username + this.password;
    const encryptedPassword = this.encrypt(plaintextPassword, this.encryptionKey);

    const hashedPassword = crypto.createHash('sha256').update(encryptedPassword).digest('hex');

    // Yeni şifreyi oluşturun
    const newPassword = {
      id: timestamp,
      service: this.service,
      username: this.username,
      password: hashedPassword,
    };

    // Kullanıcının mevcut bilgilerini alın
    const currentUserInfo = await axios.get(`http://localhost:3000/user/${userInfo.id}`);
    
    // Sadece şifreleri güncelleyin
    currentUserInfo.data.sifreler.push(newPassword);

    // Kullanıcının tüm bilgilerini güncelleyin
    await axios.put(`http://localhost:3000/user/${userInfo.id}`, currentUserInfo.data);

    console.log('Şifre Eklendi:', newPassword);
    alert('Şifre başarıyla eklendi!');
  } catch (error) {
    console.error('Şifre Ekleme Başarısız:', error);
  }

  this.service = '';
  this.username = '';
  this.password = '';
  this.encryptionKey = ''; // Kullanılan şifreleme anahtarını temizle
},
    encrypt(plaintext, key) {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
      const num_alphabet = alphabet.length;
      let ciphertext = '';

      for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i].toLowerCase();
        if (alphabet.includes(char)) {
          const index = alphabet.indexOf(char);
          const new_index = (index + parseInt(key, 10)) % num_alphabet;
          ciphertext += alphabet[new_index];
        } else {
          ciphertext += char;
        }
      }

      return ciphertext;
    },
  },
  components: { HeaderPage },
};
</script>
  
<style scoped>
.password-form {
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
