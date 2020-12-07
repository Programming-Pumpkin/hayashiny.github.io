var iframe = document.getElementById("iframe");

function setURL(url){
    document.getElementById('iframe').src = url;
}

function setiFrame(){
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}