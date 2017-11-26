var languageSelector = document.getElementById("languageMenu");
var CurrentPage = window.location.pathname.substring(location.pathname.lastIndexOf("/"))
var strLangSelect = "";

strLangSelect = "<select id='langmenu'>";
strLangSelect += "<option value=''>Language:</option>"
strLangSelect += "<option value='" + CurrentPage + "'>English</option>";
strLangSelect += "<option value='/jp" + CurrentPage + "'>日本語</option>";
strLangSelect += "</select>";

languageSelector.innerHTML = strLangSelect;

function changeLanguage() {  
    var langSelect = document.getElementById("langmenu");
    var newUrlForPage = langSelect.options[langSelect.selectedIndex].value;
    
    window.location.assign(newUrlForPage);
}

//e.options[e.selectedIndex].value

languageSelector.addEventListener("change", changeLanguage);