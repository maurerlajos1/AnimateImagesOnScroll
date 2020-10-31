window.onscroll = function () {
  animateImages(24, 10, 25, renderCatImage)
};

function animateImages(allImageNumber, startImageIndex, pixelChange, renderFunction) {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const restartPixel = pixelChange * allImageNumber;
  let restartCounter = 1;
  if (scrollTop > restartPixel) {
    restartCounter = Math.ceil(scrollTop / restartPixel);
  }
  restartCounter = restartCounter - 1;
  const currentImageNumber = (Math.ceil(scrollTop / pixelChange) + startImageIndex - restartCounter * allImageNumber);
  renderFunction(currentImageNumber);
}

function renderCatImage(ImageNumber) {
  document.getElementsByClassName("attachment-large")[0].src = 'motion/m-' + ImageNumber + '.png';
  document.getElementsByClassName("attachment-large")[0].srcset = 'motion/m-' + ImageNumber + '.png 254w, motion/m-' + ImageNumber + '.png 106w';
}