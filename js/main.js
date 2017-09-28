document.addEventListener('DOMContentLoaded', function() {
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if (wrapper.className.indexOf('skwed') != -1) {
    skew = 1000;
  }

  wrapper.addEventListener('mousemove', function(e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = delta + e.clientX + 'px';
    topLayer.style.width = delta + skew + e.clientX + 'px';
  });
});
