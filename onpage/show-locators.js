var arr1 = JSON.parse(localStorage.getItem('locators'));

function addPin(element, currentNode) {
    let pathname = document.location.pathname;
    console.log(pathname);
    
    console.log(currentNode.urls[0]);
    console.log(currentNode.urls[0].includes(pathname));
    if(pathname == currentNode.urls){
        console.log('23')
    }
    let pin = document.createElement('div');
    
    pin.classList.add("test-coverage");
    pin.classList.add("coveragePin");
    pin.style.zIndex = 1002;
    pin.style.color="#ffffff"
    pin.innerHTML = currentNode.count.toString();
    pin.setAttribute("title", currentNode.fullPath);
    let tests = "";

    for (let k in currentNode.tests) {
        tests = tests + k + '\n';
    }

    let dropDownText = document.createElement('pre');
    dropDownText.innerText = tests;

    let dropDown = document.createElement('div');
        dropDown.setAttribute("class", 'dropdown-content');
        dropDown.appendChild(dropDownText);
    pin.appendChild(dropDown);
    element.appendChild(pin);
}

function getMapSize(x) {
    var len = 0;
    for (var count in x) {
        len++;
    }
    return len;
}

function findElement(node) {
    let elem;
    let elem1 = document
        .evaluate(node.fullPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        .singleNodeValue;

    if (elem1 == null) {
        return null;
    }

    if (elem1.tagName === 'A') {
        elem1.style.position = "relative";
    }

    if (elem1.tagName === 'INPUT') {
        elem = elem1.parentNode;
    } else {
        elem = elem1;
    }
    return elem;
}

function showElements(subArr) {
    for (let i in subArr) {
        let current = subArr[i];

        // if (Array.isArray(current.child) && current.child.length) {
        //         //     showElements(current.child);
        //         // }

        // if (!current.meta.fullPath) {
        //     continue;
        // }

        let elem = findElement(current);
        if (elem == null) {
            continue;
        }


        addPin(elem, current);
    }
}

function removePrevElements() {
    var oldElements = document.getElementsByClassName("test-coverage");
    for (var i = 0; i < oldElements.length; i++) {
        oldElements[i].remove();
    }
}

var observer = new MutationObserver(function (mutations) {
    for (let mutation of mutations) {
        if (hasNewNode) {
            break;
        }
        for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) {
                continue;
            }
            if (node.matches(".test-coverage")) {
                continue;
            }
            hasNewNode = true;
            break;
        }
    }
});
observer.observe(document.body, {subtree: true, childList: true});

hasNewNode = true;

function wroomwroom() {
    if (hasNewNode) {
        removePrevElements();
        showElements(arr1);
        hasNewNode = false;
    }
}

setInterval(wroomwroom, 1000);
