
import './css/style.css';
import googleLogo from './assets/google_icon.png'


function genElement(tag, attributes) {
    const element = document.createElement(tag)
    for (let attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute])
    }
    return element
}

let appendElement = (parent, element) => parent.appendChild(element)



function createContainer() {
    let mainContainer = genElement('div', { 'class': 'main-container' })
    let imgContainer = genElement('div', { 'class': 'img-container' })
    let loginContainer = genElement('div', { 'class': 'login-container' })
    let loginFormContainer = genElement('div', { 'class': 'login-form-container' })
    let loginWrapper = genElement('div', { 'class': 'wrapper' })
    let welcomeBack = genElement('p', { 'class': 'welcome-back' })
    let loginHeader = genElement('h2')
    let loginForm = genElement('form', { 'class': 'login-form' })
    let loginSectionTop = genElement('div', { 'class': 'login-section' })
    let labelEmail = genElement('label', { 'for': 'email' })
    let inputEmail = genElement('input', { 'type': 'email', 'name': 'email', 'id': 'email', 'class': 'input-form' })
    let smallEmail = genElement('small', { 'class': 'hint email-hint' })
    let loginSectionMid = genElement('div', { 'class': 'login-section' })
    let labelPassword = genElement('label', { 'for': 'password' })
    let inputPassword = genElement('input', { 'type': 'password', 'name': 'password', 'id': 'password', 'class': 'input-form' })
    let smallPassword = genElement('small', { 'class': 'hint password-hint' })
    let loginSectionBottom = genElement('div', { 'class': 'login-section' })
    let labelRemember = genElement('label', { 'for': 'remember-me' })
    let inputRemember = genElement('input', { 'type': 'checkbox', 'name': 'remember-me', 'id': 'remember-me', 'class': 'form-checkbox' })
    let formButton = genElement('button', { 'class': 'form-login-button login-button', 'type': 'submit' })
    let loginWithGoogleButton = genElement('button', { 'class': 'login-with-google-button', 'type': 'button' })
    let googleIcon = genElement('img', { 'src': googleLogo, 'class': 'google-icon' })
    let googleText = genElement('span', { 'class': 'google-text' })
    let noAccountContainer = genElement('div', { 'class': 'no-account-container' })
    let noAccountText = genElement('span', { 'class': 'no-account-text' })
    let signUpLink = genElement('a', { 'href': '#', 'class': 'sign-up-link' })




    appendElement(document.body, mainContainer)
    appendElement(mainContainer, imgContainer)
    appendElement(mainContainer, loginContainer)
    appendElement(loginContainer, loginFormContainer)
    appendElement(loginFormContainer, loginWrapper)
    appendElement(loginWrapper, welcomeBack)
    appendElement(loginWrapper, loginHeader)
    appendElement(loginWrapper, loginForm)
    appendElement(loginForm, loginSectionTop)
    appendElement(loginSectionTop, labelEmail)
    appendElement(loginSectionTop, inputEmail)
    appendElement(loginSectionTop, smallEmail)
    appendElement(loginForm, loginSectionMid)
    appendElement(loginSectionMid, labelPassword)
    appendElement(loginSectionMid, inputPassword)
    appendElement(loginSectionMid, smallPassword)
    appendElement(loginForm, loginSectionBottom)
    appendElement(loginSectionBottom, labelRemember)
    appendElement(loginSectionBottom, inputRemember)
    appendElement(loginForm, formButton)
    appendElement(loginWrapper, loginWithGoogleButton)
    appendElement(loginWithGoogleButton, googleIcon)
    appendElement(loginWithGoogleButton, googleText)
    appendElement(loginWrapper, noAccountContainer)
    appendElement(noAccountContainer, noAccountText)
    appendElement(noAccountContainer, signUpLink)





    welcomeBack.textContent = 'Welcome Back'
    loginHeader.textContent = 'Login to your account'
    labelEmail.textContent = 'Email'
    labelPassword.textContent = 'Password'
    labelRemember.textContent = 'Remember me'
    formButton.textContent = 'Login'
    googleText.textContent = 'Login with Google'
    noAccountText.textContent = 'Don\'t have an account?'
    signUpLink.textContent = 'Join Free today'


    return {
        loginForm: loginForm,
        smallEmail: smallEmail,
        smallPassword: smallPassword
    }

}

const elements = createContainer()

elements.loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    elements.smallEmail.textContent = ''
    elements.smallPassword.textContent = ''

    if (!requiredValidater(data.email).isValid) {
        elements.smallEmail.textContent = 'Field required'
    }
    if (!requiredValidater(data.password).isValid) {
        elements.smallPassword.textContent = 'Field required'
    }

    console.log(data)
})

function requiredValidater(value) {
    return value === '' ? { isValid: false } : { isValid: true }

}










