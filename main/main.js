console.log("The extension is up and running");

var images = document.getElementsByTagName('img')

for (elt of images){
   elt.src = `${browser.runtime.getURL("shrek_background.jpg")}`
   elt.alt = 'an alt text'
}