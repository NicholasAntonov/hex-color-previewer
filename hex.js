const hexRegex = /([0-9a-f]{6})/ig;

// Get all text nodes
const textNodes = []
{
    const walk = document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
    let n;
    while(n = walk.nextNode()) {
        a.push(n);
    }
}
