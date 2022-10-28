// Write your code here.


import logo from './assets/logo.png'
import background from './assets/Hero.png'
import serviceLogo from './assets/icon-1.png'
import facebookLogoImg from './assets/akar-icons_facebook-fill.png'


function generateElement(tagName) {
    return document.createElement(tagName);
}

let append = (currentElement, newElement) => {
    currentElement.appendChild(newElement);
};

let attribute = (currentElement, attrName, value) => {
    currentElement.setAttribute(attrName, value);
};

function createNavbar() {
    let mainContainer = generateElement('div');
    let logoContainer = generateElement('div');
    let linksContainer = generateElement('nav');
    let logoImage = generateElement('img');
    let unorderedList = generateElement('ul');
    let homeListItem = generateElement('li');
    let aboutUsListItem = generateElement('li')
    let projectListItem = generateElement('li')
    let servicesListItem = generateElement('li')
    let contactUsListItem = generateElement('li');
    let homeLink = generateElement('a');
    let aboutUsLink = generateElement('a')
    let projectLink = generateElement('a')
    let servicesLink = generateElement('a')
    let contactUsLink = generateElement('a');
    let wrapper = generateElement('div')


    attribute(logoImage, 'src', logo);
    attribute(contactUsLink, 'href', '/contact');
    attribute(aboutUsLink, 'href', '/aboutus')
    attribute(homeLink, 'href', '/');
    attribute(projectLink, 'href', '/Project')
    attribute(servicesLink, 'href', '/Services')

    aboutUsLink.textContent = 'About Us'
    homeLink.textContent = 'Home'
    contactUsLink.textContent = 'Contact Us'
    projectLink.textContent = 'Projects'
    servicesLink.textContent = 'Services'

    append(homeListItem, homeLink);
    append(logoContainer, logoImage);
    append(aboutUsListItem, aboutUsLink)
    append(contactUsListItem, contactUsLink);
    append(projectListItem, projectLink)
    append(servicesListItem, servicesLink)
    append(unorderedList, homeListItem);
    append(unorderedList, aboutUsListItem)
    append(unorderedList, projectListItem)
    append(unorderedList, servicesListItem)
    append(unorderedList, contactUsListItem);
    append(linksContainer, unorderedList);
    append(mainContainer, wrapper)
    append(wrapper, logoContainer);
    append(wrapper, linksContainer);
    append(document.body, mainContainer);



    attribute(mainContainer, "class", "navigation")
    attribute(unorderedList, "class", "links")
    attribute(wrapper, "class", "wrapper flex space-between items-center")
}

function createBackground() {

    let backgroundContainer = generateElement('div')
    let imgContainer = generateElement('img')


    append(document.body, backgroundContainer)
    append(backgroundContainer, imgContainer)

    attribute(backgroundContainer, "class", "backgroundContainer")
    attribute(imgContainer, 'src', background)
}

function createReputationSection() {
    let reputationContent = generateElement('section')
    let header = generateElement('h1')
    let wrapper = generateElement('div')
    let cardsContainer = generateElement('div')

    function genCards(settings) {
        let card = generateElement('div')
        let cardTitle = generateElement('p')
        let description = generateElement('p')
        let cardImg = generateElement('img')

        append(card, cardImg)
        append(card, cardTitle)
        append(card, description)

        attribute(card, 'class', 'card')
        attribute(cardTitle, 'class', 'cardTitle')
        attribute(description, 'class', 'description')

        cardTitle.textContent = settings.title
        description.textContent = settings.description

        attribute(cardImg, 'src', settings.src)

        return card

    }



    append(reputationContent, wrapper)
    append(wrapper, header)
    append(wrapper, cardsContainer)
    append(document.body, reputationContent)

    attribute(reputationContent, 'class', 'reputationContent')
    attribute(cardsContainer, 'class', 'cardsContainer ')
    attribute(wrapper, 'class', 'wrapper flex items-center flex-column')
    attribute(header, 'class', 'reputationHeader')

    header.textContent = 'Our Reputation'
    const settings =
        [{
            title: 'Best Services',
            description: 'Bla Bla',
            src: serviceLogo
        }, {
            title: 'Best Teams',
            description: 'Bla Bla',
            src: serviceLogo
        }, {
            title: 'Best Design',
            description: 'Bla Bla',
            src: serviceLogo
        }]

    settings.forEach(config => {
        const card = genCards(config)
        append(cardsContainer, card)
    });
}

function createServiceSection() {

    let serviceContainer = generateElement('div')
    let wrapper = generateElement('div')
    let header = generateElement('h1')
    let cardsContainer = generateElement('div')

    function genCards(settings) {
        let card = generateElement('div')
        let img = generateElement('img')
        let name = generateElement('p')

        append(card, img)
        append(card, name)

        attribute(card, 'class', 'serviceCards')
        attribute(name, 'class', 'serviceCardNames')
        attribute(img, 'class', 'img')

        name.textContent = settings.cardName

        attribute(img, 'src', serviceLogo)

        return card
    }



    attribute(serviceContainer, 'class', 'serviceContainer')
    attribute(wrapper, 'class', 'wrapper flex items-center flex-column')
    attribute(cardsContainer, 'class', 'serviceCardsContainer')
    attribute(header, 'class', 'header')

    header.textContent = 'Services'

    const settings = [{
        src: serviceLogo,
        cardName: 'Construction'
    },
    {
        src: serviceLogo,
        cardName: 'Renovation'
    },
    {
        src: serviceLogo,
        cardName: 'Consultation'
    },
    {
        src: serviceLogo,
        cardName: 'Repair Services'
    },
    {
        src: serviceLogo,
        cardName: 'Architecture'
    },
    {
        src: serviceLogo,
        cardName: 'Electric'
    }]

    settings.forEach(config => {
        const card = genCards(config)
        append(cardsContainer, card)
    })

    append(document.body, serviceContainer)
    append(serviceContainer, wrapper)
    append(wrapper, header)
    append(wrapper, cardsContainer)

}

function createConsultationSection() {
    let container = generateElement('div')
    let textContainer = generateElement('div')
    let buttonContainer = generateElement('div')
    let header = generateElement('h1')
    let phoneNumber = generateElement('p')
    let button = generateElement('button')

    header.textContent = 'Free consultation with exceptional quality'
    phoneNumber.textContent = 'Just one call away: +84 1102 2703'
    button.textContent = 'Get your consultation'

    append(document.body, container)
    append(container, textContainer)
    append(container, buttonContainer)
    append(textContainer, header)
    append(textContainer, phoneNumber)
    append(buttonContainer, button)

    attribute(container, 'class', 'container')
    attribute(textContainer, 'class', 'textContainer')
    attribute(buttonContainer, 'class', 'buttonContainer')

}

function createFormSection() {

    let formContainer = generateElement('div')
    let header = generateElement('h1')
    let text = generateElement('p')
    let form = generateElement('form')
    let formContent = generateElement('div')
    let firstInputContainer = generateElement('div')
    let secondInputContainer = generateElement('div')
    let thirdInputContainer = generateElement('div')
    let button = generateElement('button')
    let nameInput = generateElement('input')
    let emailInput = generateElement('input')
    let reasonInput = generateElement('input')
    let phoneinput = generateElement('input')
    let textArea = generateElement('textarea')

    append(document.body, formContainer)
    append(formContainer, header)
    append(formContainer, text)
    append(formContainer, form)
    append(form, formContent)
    append(formContent, firstInputContainer)
    append(formContent, secondInputContainer)
    append(formContent, thirdInputContainer)
    append(formContent, button)
    append(firstInputContainer, nameInput)
    append(firstInputContainer, emailInput)
    append(secondInputContainer, reasonInput)
    append(secondInputContainer, phoneinput)
    append(thirdInputContainer, textArea)


    attribute(formContainer, 'class', 'formContainer')
    attribute(header, 'class', 'formHeader')
    attribute(text, 'class', 'formText')
    attribute(form, 'class', 'form')
    attribute(formContent, 'class', 'formContent')
    attribute(firstInputContainer, 'class', 'firstInputContainer')
    attribute(secondInputContainer, 'class', 'secondInputContainer')
    attribute(thirdInputContainer, 'class', 'thirdInputContainer')
    attribute(button, 'class', 'button')
    attribute(nameInput, 'class', 'nameInput')
    attribute(emailInput, 'class', 'emailInput')
    attribute(reasonInput, 'class', 'reasonInput')
    attribute(phoneinput, 'class', 'phoneInput')
    attribute(textArea, 'class', 'textArea')

    header.textContent = 'What can we do for you?'
    text.textContent = 'We are ready to work on a Project of any complexity, whether it is a commercial or residential.'
    nameInput.placeholder = 'Your Name'
    emailInput.placeholder = 'Email'
    reasonInput.placeholder = 'Reason for Contacting'
    phoneinput.placeholder = 'Phone'
    textArea.placeholder = 'Message'
    button.textContent = 'Submit'
}

function createContactSection() {
    let contactContainer = generateElement('div')
    let addressContainer = generateElement('div')
    let newsletterContainer = generateElement('div')
    let address = generateElement('div')
    let addressName = generateElement('p')
    let addressText = generateElement('p')
    let phone = generateElement('div')
    let phoneName = generateElement('p')
    let phoneText = generateElement('p')
    let email = generateElement('div')
    let emailName = generateElement('p')
    let emailText = generateElement('p')
    let logoImg = generateElement('img')
    let newsletterTextContainer = generateElement('div')
    let newsletterText = generateElement('p')
    let emailInputcontainer = generateElement('div')
    let emailInput = generateElement('input')
    let buttonContainer = generateElement('div')
    let subscribeButton = generateElement('button')
    let socialTextContainer = generateElement('div')
    let socialText = generateElement('p')
    let socialLogoContainer = generateElement('div')
    let facebookLogo = generateElement('img')
    let twitterLogo = generateElement('img')
    let linkedinLogo = generateElement('img')


    append(document.body, contactContainer)
    append(contactContainer, addressContainer)
    append(contactContainer, newsletterContainer)
    append(addressContainer, address)
    append(addressContainer, phone)
    append(addressContainer, email)
    append(address, addressName)
    append(phone, phoneName)
    append(email, emailName)
    append(address, addressText)
    append(phone, phoneText)
    append(email, emailText)
    append(addressContainer, logoImg)
    append(newsletterContainer, newsletterTextContainer)
    append(newsletterContainer, emailInputcontainer)
    append(emailInputcontainer, emailInput)
    append(emailInputcontainer, buttonContainer)
    append(buttonContainer, subscribeButton)
    append(newsletterTextContainer, newsletterText)
    append(newsletterContainer, socialTextContainer)
    append(newsletterContainer, socialLogoContainer)
    append(socialTextContainer, socialText)
    append(socialLogoContainer, facebookLogo)
    append(socialLogoContainer, twitterLogo)
    append(socialLogoContainer, linkedinLogo)



    attribute(contactContainer, 'class', 'contactContainer')
    attribute(addressContainer, 'class', 'addressContainer')
    attribute(newsletterContainer, 'class', 'newsletterContainer')
    attribute(address, 'class', 'address')
    attribute(phone, 'class', 'phone')
    attribute(email, 'class', 'email')
    attribute(addressName, 'class', 'addressName')
    attribute(phoneName, 'class', 'phoneName')
    attribute(emailName, 'class', 'emailName')
    attribute(addressText, 'class', 'addressText')
    attribute(phoneText, 'class', 'phoneText')
    attribute(emailText, 'class', 'emailText')
    attribute(logoImg, 'src', logo)
    attribute(logoImg, 'class', 'logoImg')
    attribute(newsletterTextContainer, 'class', 'newsletterTextContainer')
    attribute(newsletterText, 'class', 'newsletterText')
    attribute(emailInputcontainer, 'class', 'emailInputContainer')
    attribute(emailInput, 'class', 'emailInputSecond')
    attribute(buttonContainer, 'class', 'subscribeButtonContainer')
    attribute(subscribeButton, 'class', 'subscribeButton')
    attribute(socialTextContainer, 'class', 'socialTextContainer')
    attribute(socialText, 'class', 'socialText')
    attribute(socialLogoContainer, 'class', 'socialLogoContainer')
    attribute(facebookLogo, 'src', facebookLogoImg)
    attribute(facebookLogo, 'class', 'facebookLogo')
    attribute(twitterLogo, 'src', facebookLogoImg)
    attribute(twitterLogo, 'class', 'twitterLogo')
    attribute(linkedinLogo, 'src', facebookLogoImg)
    attribute(linkedinLogo, 'class', 'linkedinLogo')



    addressName.textContent = 'Address:'
    phoneName.textContent = 'Phone:'
    emailName.textContent = 'Email:'
    addressText.textContent = '6391 Spring Hill Dr. McLean, VA 22101'
    phoneText.textContent = '+84 1102 2703'
    emailText.textContent = 'hello@thebox.com'
    newsletterText.textContent = 'Newsletter:'
    emailInput.placeholder = 'Your Email'
    subscribeButton.textContent = 'Subscribe'
    socialText.textContent = 'Social:'




}

function createFooter() {
    let footer = generateElement('div')
    let footerText = generateElement('p')

    append(document.body, footer)
    append(footer, footerText)

    attribute(footer, 'class', 'footer')
    attribute(footerText, 'class', 'footerText')

    footerText.textContent = 'TheBox Company © 2022. All rights reserved.'
}

createNavbar()
createBackground()
createReputationSection()
createServiceSection()
createConsultationSection()
createFormSection()
createContactSection()
createFooter()