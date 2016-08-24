if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
    alert(jQuery.fn.jquery);
}

jQuery ('body').scrollspy({
    target: '.site-navigation',
    offset: 60
});