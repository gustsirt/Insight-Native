const config = {
  // navbar: {
  //   default: [
  //     { name: 'Home', path: '/' },
  //     { name: 'Login', path: '/login' },
  //   ],
  //   private: [
  //     { name: 'Proyectos', path: '/projects' },
  //     { name: 'Logout', path: '/logout' },
  //   ],
  // },
  publicUser: {
    data: {
      given_name: 'public', // Este dato se verifica en private
      full_name: 'Usuario no logueado'
    }
  }, S
  path: {
    login: '/projects', // luego de que loguea
    private: '/login', // cuando intenta entrar a una ruta privada
  },
  images: {
    logo: [
      { src: '/logo.png', alt: 'Logo' },
      { src: '/insight.png', alt: 'Logo' },
      { src: '/insight_hor.png', alt: 'Logo' },
    ]
  }
}

export const styles = {
  button: "px-2 py-2 text-center rounded transition-all",
}

export const variant = {
  primary: " bg-primary hover:bg-primary-dark text-white",
  secondary: " bg-secondary hover:bg-secondary-dark text-white",
  tertiary: " bg-tertiary hover:bg-tertiary-dark text-white",
  complementary: " bg-complementary hover:bg-complementary-dark text-white",
  danger: " bg-red-700 hover:bg-red-900 text-white",
  success: " bg-green-700 hover:bg-green-900 text-white",
  warning: " bg-yellow-700 hover:bg-yellow-900 text-white",
}

export default config

// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }