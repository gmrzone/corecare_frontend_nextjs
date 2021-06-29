// export const BASE_URL = "http://127.0.0.1:8000"
// export const BASE_URL = "https://www.afzalsaiyed.corecare.in/"
export const BASE_URL = process.env.NODE_ENV === 'development' ? "http://127.0.0.1:8000" : "https://www.rest.corecare.in"
export const frontend_base = process.env.NODE_ENV === "development" ? "http://127.0.0.1:3000/" : "https://www.dev.corecare.in/"

export const navItem = [
    {
        name: 'Become a Partner',
        route: '/become-a-partner'
    },
    {
        name: 'Blog',
        route: '/blog'
    },
    {
        name: 'Contact',
        route: '/contact'
    },
    {
        name: 'About',
        route: '/about'
    },
]
export const ProfileBoxitem = [
    {
        name: 'Login',
        route: '/login'
    },
    {
        name: 'Signup',
        route: '/signup'
    },
    {
        name: 'Cart',
        route: '/cart'
    }
]

export const ProfileBoxitemLogin = [

    {
        name: 'Cart',
        route: '/cart'
    },
    {
        name: 'Orders',
        route: '/orders'
    },
    {
        name: 'Logout',
        route: '/logout'
    }

]
export const ProfileBoxitemMobile = [
    {
        name: 'Become a Partner',
        route: '/become-a-partner'
    },
    {
        name: 'Login',
        route: '/login'
    },
    {
        name: 'Signup',
        route: '/signup'
    },
    {
        name: 'Cart',
        route: '/cart'
    },
    {
        name: 'Blog',
        route: '/blog'
    },
    {
        name: 'Contact',
        route: '/contact'
    },
    {
        name: 'About',
        route: '/about'
    }
]
export const ProfileBoxitemMobileLogin = [
    {
        name: 'Become a Partner',
        route: '/become-a-partner'
    },
    {
        name: 'Cart',
        route: '/cart'
    },
    {
        name: 'Orders',
        route: '/orders'
    },
    {
        name: 'Blog',
        route: '/blog'
    },
    {
        name: 'Contact',
        route: '/contact'
    },
    {
        name: 'About',
        route: '/about'
    },
    {
        name: 'Logout',
        route: '/logout'
    }
]