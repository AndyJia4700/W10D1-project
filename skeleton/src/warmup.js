
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    if (htmlElement.children) {
        Array.from(htmlElement.children).forEach(el=>{
            htmlElement.removeChild(el)
        });
    }

    let pTag = document.createElement('p');
    pTag.innerHTML = string;
    htmlElement.appendChild(pTag);

};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation.', partyHeader);