export default function ({app, store, redirect}) {

  app.$axios.onRequest(config => {
    store.dispatch('updateLoadingStatus', true);
    // app.$axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  })
    
  app.$axios.onRequestError(error => {
    store.dispatch('updateLoadingStatus', false);
  })
  
  app.$axios.onResponse(config => {
    store.dispatch('updateLoadingStatus', false);
  })
  
  app.$axios.onResponseError(error => {
    store.dispatch('updateLoadingStatus', false);
  })
}