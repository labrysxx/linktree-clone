const shareButtons = document.querySelectorAll(".tile-share-button")

function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')

    try {
        navigator.clipboard.writeText(link)
        alert("Texto copiado: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach((shareButton => shareButton.addEventListener('click', copyText )))