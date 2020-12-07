var iframe = document.getElementById("iframe");

function setURL(url){
    document.getElementById('iframe').src = url;
}

iframe.onload = function(){
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
