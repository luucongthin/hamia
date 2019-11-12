import Auth from './auth'

import './middleware'

// Active schemes
import scheme_003d9a64 from './schemes/local.js'
import scheme_23514a38 from './schemes/oauth2.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/account/login","logout":"/","home":"/","callback":"/account/callback"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"/api/login","method":"post","propertyName":"Data.token"},"logout":{"url":"/api/auth/logout","method":"post"},"user":{"url":"/api/account","method":"get","propertyName":"Data"}},"_name":"local"}))

  // facebook
  $auth.registerStrategy('facebook', new scheme_23514a38($auth, {"client_id":"2010316212389042","userinfo_endpoint":"https://graph.facebook.com/v4.0/me?fields=about,picture{url},email,birthday,address,last_name,first_name,gender,middle_name,name","scope":["public_profile","email","user_birthday"],"_name":"facebook","authorization_endpoint":"https://facebook.com/v2.12/dialog/oauth"}))

  // google
  $auth.registerStrategy('google', new scheme_23514a38($auth, {"client_id":"655230625611-9bjeumbu1ffgoff49bbfnpis8r76cbnn.apps.googleusercontent.com","_name":"google","authorization_endpoint":"https://accounts.google.com/o/oauth2/auth","userinfo_endpoint":"https://www.googleapis.com/oauth2/v3/userinfo","scope":["openid","profile","email"]}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
