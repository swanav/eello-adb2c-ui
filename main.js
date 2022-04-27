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

function stylePage() {
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

$(document).ready(function() {
    stylePage();
});
