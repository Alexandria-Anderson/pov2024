function typeTableContent(elements) {
    // Fetch all cells/elements and set their data-content attributes
    const cells = elements.map(element => {
        const textContent = element.textContent;
        const placeholder = '<span style="visibility: hidden;">' + textContent + '</span>';
        element.setAttribute('data-content', textContent);
        element.innerHTML = placeholder;
        return element;
    });

    function typeContentIntoElement(element, callback) {
        const content = element.getAttribute('data-content') || '';
        let text = '';
        let charIndex = 0;
        const typingSpeed = 50;

        function typeChar() {
            if (charIndex < content.length) {
                const char = content.charAt(charIndex);
                if (char === '<' && content.substring(charIndex, charIndex + 4) === '<br>') {
                    text += '<br>';
                    charIndex += 4;
                } else {
                    text += char;
                    charIndex++;
                }

                element.innerHTML = text;
                setTimeout(typeChar, typingSpeed);
            } else if (callback) {
                callback();
            }
        }

        typeChar();
    }

    function typeNextElement(index) {
        if (index < cells.length) {
            typeContentIntoElement(cells[index], function () {
                typeNextElement(index + 1);
            });
        }
    }

    typeNextElement(0);
}
