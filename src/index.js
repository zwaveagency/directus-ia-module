import ModuleComponent from './module.vue';

export default {
  id: 'ia',
  name: 'IA',
  icon: 'psychology',
  routes: [
    {
      path: '',
      redirect: '/content/FAQ'
    },
    {
      path: 'faq',
      redirect: '/content/FAQ'
    },
    {
      path: 'sito-web',
      redirect: '/content/Sito_web'
    },
    {
      path: 'file',
      redirect: '/content/File'
    }
  ],
};
