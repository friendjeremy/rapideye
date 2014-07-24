fbupImage = new Image();
fbupImage.src = "/img/fbact.png";
fbdownImage = new Image();
fbdownImage.src = "/img/fbdown.png"
fbnormalImage = new Image();
fbnormalImage.src = "/img/fbup.png";
 
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

vimupImage = new Image();
vimupImage.src = "/img/vimeoact.png";
vimdownImage = new Image();
vimdownImage.src = "/img/vimeoact.png"
vimnormalImage = new Image();
vimnormalImage.src = "/img/vimeoup.png";
 
function vimchangeImage()
{
  document.images["vimicon"].src= vimupImage.src;
  return true;
}
function vimchangeImageBack()
{
   document.images["vimicon"].src = vimnormalImage.src;
   return true;
}
function vimhandleMDown()
{
 document.images["vimicon"].src = vimdownImage.src;
 return true;
}