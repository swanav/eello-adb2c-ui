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

    const localSignInDiv = document.querySelector('#localAccountForm.localAccount')
    console.log(localSignInDiv)
    if (localSignInDiv) {
        localSignInDiv.classList.add('card', 'p-5')
        localSignInDiv.querySelector('.intro').remove();
        const form = localSignInDiv
        form.classList.add('is-flex', 'is-flex-direction-column')
        form.childNodes.forEach((e) => {
            if (e.nodeType === Node.ELEMENT_NODE) {
                e.classList.add('is-flex-grow-1', 'm-2', 'p-2')
            }
        })

        const errorDivs = localSignInDiv.querySelectorAll('.error')
        errorDivs.forEach(errorDiv => {
            styleErrorElement(errorDiv)
        })

        form.querySelector('label[for=signInName]').classList.add('is-hidden')
        form.querySelector('#signInName').classList.add('input', 'my-2')
        form.querySelector('label[for=password]').classList.add('is-hidden')
        form.querySelector('#forgotPassword').classList.add('is-pulled-right', 'button', 'is-inverted', 'is-rounded', 'is-small', 'is-danger', 'my-4')
        form.querySelector('#password').classList.add('input', 'my-2')
        form.querySelector('.rememberMe').classList.add('my-4')
        form.querySelector('#rememberMe').classList.add('mr-2')
        form.querySelector('label[for=rememberMe]').classList.add('mx-2', 'has-text-danger')

        form.querySelectorAll('button').forEach(e => {
            e.classList.add('button', 'is-flex-grow-1', 'is-primary', 'my-5')
        })

        form.querySelector('.divider').classList.add('has-text-centered');

        const createAccountSelector = form.querySelector('.create')
        if (createAccountSelector) {
            const createAccountPrompt = createAccountSelector.children[0]
            if (createAccountPrompt) {
                let layoutClass = document.body.clientWidth > 640 ? 'is-flex-direction-row' : 'is-flex-direction-column'
                createAccountPrompt.classList.add('is-flex', layoutClass, 'is-justify-content-center')

                const signUpLink = createAccountPrompt.childNodes[1]

                const promptDiv = document.createElement('div')
                promptDiv.classList.add('mx-2', 'has-text-centered')
                promptDiv.innerText = "Don't have an account?"


                createAccountPrompt.innerHTML = ''
                createAccountPrompt.appendChild(promptDiv)
                if (signUpLink) {
                    createAccountPrompt.appendChild(signUpLink)
                    signUpLink.classList.add('has-text-centered', 'has-text-primary')
                }
            }
    
    
        }
    }
}

function styleErrorElement(element) {
    if (element) {
        element.classList.add('message', 'is-danger')
        const messageBody = element.querySelector('p')
        if (messageBody) {
            messageBody.classList.add('message-body')
        } else {
            const errorMessage = element.innerText
            const messageBody = document.createElement('p')
            messageBody.classList.add('message-body')
            messageBody.innerText = errorMessage
            element.innerHTML = messageBody.outerHTML
        }
    }
}

function styleLocalSignInPage() {
    const localSignInDiv = document.querySelector('#LocalSignIn #api[data-name="Unified"]')
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

        const errorDivs = localSignInDiv.querySelectorAll('.error')
        errorDivs.forEach(errorDiv => {
            styleErrorElement(errorDiv)
        })

        form.querySelector('label[for=signInName]').classList.add('is-hidden')
        form.querySelector('#signInName').classList.add('input', 'my-2')
        form.querySelector('label[for=password]').classList.add('is-hidden')
        form.querySelector('#forgotPassword').classList.add('is-pulled-right', 'button', 'is-inverted', 'is-rounded', 'is-small', 'is-danger', 'my-4')
        form.querySelector('#password').classList.add('input', 'my-2')
        form.querySelector('.rememberMe').classList.add('my-4')
        form.querySelector('#rememberMe').classList.add('mr-2')
        form.querySelector('label[for=rememberMe]').classList.add('mx-2', 'has-text-danger')

        form.querySelectorAll('button').forEach(e => {
            e.classList.add('button', 'is-flex-grow-1', 'is-primary', 'my-5')
        })

        form.querySelector('.divider').classList.add('has-text-centered');

        const createAccountSelector = form.querySelector('.create')
        if (createAccountSelector) {
            const createAccountPrompt = createAccountSelector.children[0]
            if (createAccountPrompt) {
                let layoutClass = document.body.clientWidth > 640 ? 'is-flex-direction-row' : 'is-flex-direction-column'
                createAccountPrompt.classList.add('is-flex', layoutClass, 'is-justify-content-center')

                const signUpLink = createAccountPrompt.childNodes[1]

                const promptDiv = document.createElement('div')
                promptDiv.classList.add('mx-2', 'has-text-centered')
                promptDiv.innerText = "Don't have an account?"


                createAccountPrompt.innerHTML = ''
                createAccountPrompt.appendChild(promptDiv)
                if (signUpLink) {
                    createAccountPrompt.appendChild(signUpLink)
                    signUpLink.classList.add('has-text-centered', 'has-text-primary')
                }
            }
    
    
        }
    }
}

function styleLocalSignUpPage() {
    const localSignUpDiv = document.querySelector('#LocalSignUp #api[data-name="Unified"]')
    if (localSignUpDiv) {
        localSignUpDiv.classList.add('card', 'p-5')
        localSignUpDiv.querySelector('.intro').remove();

        const errorDivs = localSignUpDiv.querySelectorAll('#attributeVerification > .error.pageLevel')
        errorDivs.forEach(errorDiv => {
            styleErrorElement(errorDiv)
        })


        const form = localSignUpDiv.querySelector('form')
        if (form) {
            form.querySelectorAll('input').forEach(e => e.classList.add('input'))
            form.querySelectorAll('button').forEach(e => e.classList.add('button', 'is-primary'))

            form.querySelector('.buttons').classList.add('columns')
            form.querySelectorAll('button').forEach(e => {
                e.classList.add('column', 'm-5', 'p-3')
            })
        }
    }
}

function showPage() {
    document.querySelector('body').classList.remove('is-invisible')
}

function stylePages() {
    styleSocialSignInPage();
    styleLocalSignInPage();
    styleLocalSignUpPage();
    showPage();
}

if (document.readyState === 'loading') {
    if (window.jQuery !== undefined) {
        $(() => {stylePages();});
    } else {
        document.addEventListener("DOMContentLoaded", () => {
            stylePages();
        });
    }
} else {
    stylePages();
}
