function updatePreview() {
    let html = document.getElementById("html-code").value;
    let css = "<style>" + document.getElementById("css-code").value + "</style>";
    let js = "<script>" + document.getElementById("js-code").value + "<\/script>";

    let iframe = document.getElementById("preview").contentWindow.document;
    iframe.open();
    iframe.write(html + css + js);
    iframe.close();
}
