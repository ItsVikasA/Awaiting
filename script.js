var str = "<p>The pursuit of success is rarely a solitary endeavor; it is a symphony of interconnected efforts, a network of individuals bound by a shared vision. It is through the deliberate exchange of ideas, the pooling of resources, and the fostering of collective resilience that we transcend the ordinary and achieve the extraordinary.Placements represent not merely a milestone but a testament to the power of collaboration. By leveraging diverse perspectives, cultivating mutual growth, and dismantling silos of isolation, we create an ecosystem where progress becomes inevitable and sustainable.Our strength lies in our unity, our determination to uplift one another. Together, we are not just participants in a journey—we are architects of a future defined by shared triumphs and unparalleled possibilities.Let us proceed with purpose, for in our collaboration lies the key to boundless success.</p>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
}());






