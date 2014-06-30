fbupImage = new Image();
fbupImage.src = "/ui/img/fbact.png";
fbdownImage = new Image();
fbdownImage.src = "/ui/img/fbdown.png"
fbnormalImage = new Image();
fbnormalImage.src = "/ui/img/fbup.png";
 
function fbchangeImage()
{
  document.images["fbicon"].src= fbupImage.src;
  return true;
}
function fbchangeImageBack()
{
   document.images["fbicon"].src = fbnormalImage.src;
   return true;
}
function fbhandleMDown()
{
 document.images["fbicon"].src = fbdownImage.src;
 return true;
}

igupImage = new Image();
igupImage.src = "/ui/img/igact.png";
igdownImage = new Image();
igdownImage.src = "/ui/img/igdown.png"
ignormalImage = new Image();
ignormalImage.src = "/ui/img/igup.png";
 
function igchangeImage()
{
  document.images["igicon"].src= igupImage.src;
  return true;
}
function igchangeImageBack()
{
   document.images["igicon"].src = ignormalImage.src;
   return true;
}
function ighandleMDown()
{
 document.images["igicon"].src = igdownImage.src;
 return true;
}

twupImage = new Image();
twupImage.src = "/ui/img/twact.png";
twdownImage = new Image();
twdownImage.src = "/ui/img/twdown.png"
twnormalImage = new Image();
twnormalImage.src = "/ui/img/twup.png";
 
function twchangeImage()
{
  document.images["twicon"].src= twupImage.src;
  return true;
}
function twchangeImageBack()
{
   document.images["twicon"].src = twnormalImage.src;
   return true;
}
function twhandleMDown()
{
 document.images["twicon"].src = twdownImage.src;
 return true;
}