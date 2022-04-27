window.onload = () => {

    const unifiedSelectorDiv = document.querySelector('#api[data-name="Unified"]')
    if (unifiedSelectorDiv) {
        unifiedSelectorDiv.classList.add('card', 'p-5')
        unifiedSelectorDiv
            .querySelector('.claims-provider-list-buttons > .options')
            .childNodes
            .forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    e.classList.add('is-flex', 'mb-2', 'px-6', 'mx-6')
                }
            })

        const googleAccountButton = unifiedSelectorDiv.querySelector('.accountButton#GoogleExchange')
        modifyActionButton(googleAccountButton, 'fab fa-google')

        const amazonAccountButton = unifiedSelectorDiv.querySelector('.accountButton#AmazonExchange')
        modifyActionButton(amazonAccountButton, 'fab fa-amazon')

        const appleAccountButton = unifiedSelectorDiv.querySelector('.accountButton#AppleExchange')
        modifyActionButton(appleAccountButton, 'fab fa-apple')

        const facebookAccountButton = unifiedSelectorDiv.querySelector('.accountButton#FacebookExchange')
        modifyActionButton(facebookAccountButton, 'fab fa-facebook-f')
    }
}

function modifyActionButton(button, icon, text) {
    if (text === undefined) {
        text = button.innerText
    }

    button.classList.add('button', 'is-flex-grow-1')

    const iconSpan = document.createElement('span')
    iconSpan.classList.add('icon', 'mx-2')
    iconSpan.innerHTML = `<i class="${icon}"></i>`

    const textSpan = document.createElement('span')
    textSpan.classList.add('mx-2')
    textSpan.innerText = text

    button.replaceChildren(iconSpan, textSpan)
}

