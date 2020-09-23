import _import from './_import';
export default [
  {
    path: '/',
    name: 'Home',
    component: _import('home/index')
  },
  {
    path: '/me',
    name: 'me',
    component: _import('me/index')
  }
]
