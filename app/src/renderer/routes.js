export default [
  {
    path: '/',
    name: 'MainPage',
    component: require('components/MainPage'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
