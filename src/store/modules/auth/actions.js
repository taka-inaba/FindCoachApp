export default {
  async login(context, payload){
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });

    // const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcSHROCj3W9ZU0NiwoM_JRpH2gzZkDnhw', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: payload.email,
    //     password: payload.password,
    //     returnSecureToken: true
    //   })
    // });

    // const responseData = await response.json();

    // if (!response.ok) {
    //   console.log(responseData)
    //   const error = new Error(responseData.message || 'Failed to authenticate');
    //   throw error;
    // }

    // console.log(responseData)
    // context.commit('setUser', {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   tokenExpiration: responseData.expiresIn
    // })
  },
  async signup(context, payload){
      return context.dispatch('auth', {
        ...payload,
        mode: 'signup'
      });
    // const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcSHROCj3W9ZU0NiwoM_JRpH2gzZkDnhw', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: payload.email,
    //     password: payload.password,
    //     returnSecureToken: true
    //   })
    // });

    // const responseData = await response.json();


    // if (!response.ok) {
    //   console.log(responseData)
    //   const error = new Error(responseData.message || 'Failed to authenticate');
    //   throw error;
    // }

    // console.log(responseData)
    // context.commit('setUser', {
    //   token: responseData.idToken,
    //   userId: responseData.localId,
    //   tokenExpiration: responseData.expiresIn
    // })
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcSHROCj3W9ZU0NiwoM_JRpH2gzZkDnhw'

    if (mode == 'signup'){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcSHROCj3W9ZU0NiwoM_JRpH2gzZkDnhw'
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }

    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  tryLogin(context){
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        tokenExpiration: null
      });
    }
  },
  logout(context){
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
    // state.token = null,
    // state.userId = null;
    // state.tokenExpiration = null
  }

};
