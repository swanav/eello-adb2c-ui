function modifyActionButton(button, icon, text) {
    if (text === undefined) {
        text = button.innerText
    }

    button.classList.add('button', 'is-flex-grow-1')

    const iconSpan = document.createElement('span')
    iconSpan.classList.add('icon', 'mx-1')
    iconSpan.innerHTML = `<i class="${icon}"></i>`

    const textSpan = document.createElement('span')
    textSpan.classList.add('mx-1')
    textSpan.innerText = text

    button.replaceChildren(iconSpan, textSpan)
}

function styleLocalSignInPage() {
    const localSignInDiv = document.querySelector('#LocalSignUpAndSignIn #api[data-name="Unified"]')
    if (localSignInDiv) {
        localSignInDiv.classList.add('card', 'p-5')
        localSignInDiv.querySelector('.intro').remove();
        const form = localSignInDiv.querySelector('form')
        form.classList.add('is-flex', 'is-flex-direction-column')
        form.childNodes.forEach((e) => {
            if (e.nodeType === Node.ELEMENT_NODE) {
                e.classList.add('is-flex-grow-1', 'm-2', 'p-2')
            }
        })

        form.querySelectorAll('label').forEach(e => {
            e.classList.add('is-hidden')
        })

        form.querySelectorAll('input').forEach(e => {
            e.classList.add('input', 'mb-2')
        })
        
        form.querySelector('#forgotPassword').classList.add('is-pulled-right', 'button', 'is-inverted', 'is-rounded', 'is-small', 'is-danger', 'mt-4', 'mb-4')

        form.querySelectorAll('button').forEach(e => {
            e.classList.add('button', 'is-flex-grow-1', 'is-primary', 'mt-5')
        })

        form.querySelector('.divider').classList.add('has-text-centered');



        const createAccountSelector = form.querySelector('.create')
        createAccountSelector.children[0].classList.add('is-flex', 'px-6', 'mx-6', 'is-align-content-center')
        createAccountSelector.querySelector('a').classList.add('ml-3', 'is-align-content-center')

        console.log(localSignInDiv)
    }
}

function styleSocialSignInPage() {
    const unifiedSelectorDiv = document.querySelector('#SocialSignIn #api[data-name="Unified"]')
    if (unifiedSelectorDiv) {
        unifiedSelectorDiv.classList.add('card', 'p-5')
        unifiedSelectorDiv.querySelector('.claims-provider-list-buttons > .options')
            .childNodes
            .forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    e.classList.add('is-flex', 'mb-2', 'px-6', 'mx-7')
                }
            })

        const googleAccountButton = unifiedSelectorDiv.querySelector('.accountButton#GoogleExchange')
        modifyActionButton(googleAccountButton, 'fab fa-google', 'Sign in with Google')

        const amazonAccountButton = unifiedSelectorDiv.querySelector('.accountButton#AmazonExchange')
        modifyActionButton(amazonAccountButton, 'fab fa-amazon', 'Login with Amazon')

        const appleAccountButton = unifiedSelectorDiv.querySelector('.accountButton#AppleExchange')
        modifyActionButton(appleAccountButton, 'fab fa-apple', 'Sign in with Apple')

        const facebookAccountButton = unifiedSelectorDiv.querySelector('.accountButton#FacebookExchange')
        modifyActionButton(facebookAccountButton, 'fab fa-facebook-f', 'Facebook')
    }
}

function stylePage() {
    styleSocialSignInPage();
    styleLocalSignInPage();
}

$(document).ready(function() {
    stylePage();
});
