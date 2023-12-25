<!-- 
<template>
  <StartHeader/>
  <div>
 
    <div class="signup-container">
      <div class="header">
        <h1>ÜYE OL</h1>
      </div>
      <div class="register">
        <label for="name">Ad:</label>
        <input type="text" v-model="name" placeholder="Adınızı giriniz" />

        <label for="email">Email:</label>
        <input type="email" v-model="email" placeholder="Emailinizi giriniz" />

        <label for="password">Şifre:</label>
        <input type="password" v-model="password" placeholder="Şifrenizi giriniz" />

        <button v-on:click="signUp">Üye Ol</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StartHeader from './StartHeader.vue';


export default {
  name: 'SignUp',
  components: {
    StartHeader
},
  data() {
    return {
      name: '',
      email: '',
      password: '',
      sifreler:[]
    };
  },
  methods: {
    async signUp() {
      if (!this.name || !this.email || !this.password) {
        alert('Lütfen tüm alanları doldurun!');
        return;
      }

      let checkEmailResult = await axios.get('http://localhost:3000/user', {
        params: {
          email: this.email,
        },
      });

      if (checkEmailResult.data.length > 0) {
        alert('Bu e-posta adresi zaten kullanımda!');
        return;
      }

      let result = await axios.post('http://localhost:3000/user', {
        email: this.email,
        password: this.password,
        name: this.name,
      });

      console.warn(result);
    },
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
}

.header {
  text-align: center;
  background-color: #3498db;;
  padding: 10px;
  color: white;
  border-radius: 8px 8px 0 0;
}

.register {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 0 0 8px 8px;
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
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 20px;
  text-align: center;
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
</style> -->

<template>
  <div class="header-title">
  <StartHeader/>
</div>
  <div>
 
    <div class="signup-container">
      <div class="header">
        <h1>ÜYE OL</h1>
      </div>
      <div class="register">
        <label for="name">Ad:</label>
        <input type="text" v-model="name" placeholder="Adınızı giriniz" />

        <label for="email">Email:</label>
        <input type="email" v-model="email" placeholder="Emailinizi giriniz" />

        <label for="password">Şifre:</label>
        <input type="password" v-model="password" placeholder="Şifrenizi giriniz" />

        <button v-on:click="signUp">Üye Ol</button>
        <p>
          <router-link to="/login">Giriş Yap</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StartHeader from './StartHeader.vue';


export default {
  name: 'SignUp',
  components: {
    StartHeader
},
  data() {
    return {
      name: '',
      email: '',
      password: '',
      sifreler:[]
    };
  },
  methods: {
    async signUp() {
      if (!this.name || !this.email || !this.password) {
        alert('Lütfen tüm alanları doldurun!');
        return;
      }

      let checkEmailResult = await axios.get('http://localhost:3000/user', {
        params: {
          email: this.email,
        },
      });

      if (checkEmailResult.data.length > 0) {
        alert('Bu e-posta adresi zaten kullanımda!');
        return;
      }

      let result = await axios.post('http://localhost:3000/user', {
        email: this.email,
        password: this.password,
        name: this.name,
      });

      console.warn(result);
    },
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
}

.header {
  text-align: center;
  background-color: #3498db;;
  padding: 10px;
  color: white;
  border-radius: 8px 8px 0 0;
}

.register {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 0 0 8px 8px;
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
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 20px;
  text-align: center;
}
.nav-link {
    color: #fff;
    text-align: center;
    font-size: 200px;
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
  .header-title {
  font-size: 30px; /* İhtiyaca göre boyutu ayarlayabilirsiniz */
}
</style>

