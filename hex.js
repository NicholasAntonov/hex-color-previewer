const hexRegex = /(#[0-9a-f]{6})/ig;

// Get all text nodes that have hex codes
const textNodes = [];
{
    const walk = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
    let n;
    while(n = walk.nextNode()) {
        if (hexRegex.test(n.nodeValue)) {
            textNodes.push(n);
        }
    }
}

const nodes = textNodes.map(node => node.parentNode);

nodes.forEach(node => node.innerHTML = node.innerHTML.replace(hexRegex, '<span class="hex-color">$&</span>'));
