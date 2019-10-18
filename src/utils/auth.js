import auth0 from 'auth0-js'


export default class Auth {
    auth0 = new auth0.WebAuth({
        domain : 'doolri1276-flowns.auth0.com',
        clientID : 'doipbELEmS3zWE25DjH767QQduOxB8u4',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    })

    login = () => {
        this.auth0.authorize()
    }
}


