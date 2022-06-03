function ready(callback){
    if (document.readyState!='loading') {                        // check if document is already loaded
        callback();
    } else 
    if (document.addEventListener) {                            // modern browsers
        document.addEventListener('DOMContentLoaded', callback);
    } else                                                      // <= IE8
    document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') {
            callback();
        };
    });
};