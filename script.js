const MODES = ['monochrome', 'monochrome-dark', 'monochrome-light', 'analogic', 'complement', 'analogic-complement', 'triad', 'quad']

function getModesHtml() {
    let modesHtml = ""
    MODES.forEach(el => modesHtml += `<option value="${el}">${el}</option>`)
    document.getElementById('mode').innerHTML = modesHtml;
}

getModesHtml()
