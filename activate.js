function activateControls(){ 
    if (document.getElementsByTagName && document.body.outerHTML) { 
        var tag, arTag = Array('object','embed','applet'); 
        for(tag in arTag) { 
            var arEl = document.getElementsByTagName(arTag[tag]); 
            for(var i = 0; i < arEl.length; i++) { 
                var el = arEl.item(i); 
                var params = el.getElementsByTagName('param'); 
                var html = ''; 
                if (params.length && !/<param/i.test(el.innerHTML)) 
                    for (var x=0;x < params.length;x++)html += params.item(x).outerHTML; 
                el.outerHTML = el.outerHTML.replace('>', '>' + html); 
            } 
        } 
    } 
}