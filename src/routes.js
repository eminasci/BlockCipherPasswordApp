// import HomePage from './components/HomePage.vue'
// import SignUp from './components/SignUp.vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import LoginPage from './components/LoginPage.vue'
// import AddScholl from './components/AddScholl.vue'
// import UpdateScholl from './components/UpdateScholl.vue'
// import AdminPage  from './components/AdminPage.vue'

// const routes = [
//     {
//         name: "HomePage",
//         component: HomePage,
//         path: '/',

//     },

//     {
//         name: "SignUp",
//         component: SignUp,
//         path: "/sign-up"
//     },
//     {
//         name: "LoginPage",
//         component: LoginPage,
//         path: "/login"
//     },
//     {
//         name: "AddScholl",
//         component: AddScholl,
//         path: "/add-scholl"
//     },
//     {
//         name: "UpdateScholl",
//         component: UpdateScholl,
//         path: "/update-scholl/:id"
//     },
//     {
//         name:"AdminPage",
//         component:AdminPage,
//         path:"/adminPage"
//     },




// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// });

// export default router
import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import ListPasswords from './components/ListPasswords.vue'
import WelcomePage from './components/WelcomePage.vue'

const routes = [
  
    
    {
        name: "HomePage",
        component: HomePage,
        path: '/home-page',
        beforeEnter: (to, from, next) => {
            // localStorage'da kullanıcı bilgisi var mı kontrol et
            const userInfo = localStorage.getItem('user-info');
            if (userInfo) {
              next()
             
            } else {
                // Kullanıcı giriş yapmamışsa giriş sayfasına yönlendir
                next('/login');
            }
        },
    },
        
    {
        name: "WelcomePage",
        component: WelcomePage,
        path: '/welcome-page',
        beforeEnter: (to, from, next) => {
            // localStorage'da kullanıcı bilgisi var mı kontrol et
            const userInfo = localStorage.getItem('user-info');
            if (userInfo) {
              next()
             
            } else {
                // Kullanıcı giriş yapmamışsa giriş sayfasına yönlendir
                next('/login');
            }
        },
    },
    {
        
            name: "ListPasswords",
            component: ListPasswords,
            path: '/list-passwords',
            beforeEnter: (to, from, next) => {
                // localStorage'da kullanıcı bilgisi var mı kontrol et
                const userInfo = localStorage.getItem('user-info');
                if (userInfo) {
                  next()
                 
                } else {
                    // Kullanıcı giriş yapmamışsa giriş sayfasına yönlendir
                    next('/login');
                }
            },
    },
    
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
     
    },
    {
        name: "LoginPage",
        component: LoginPage,
        path: "/login"
    },
   
 
  
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

