const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    photo.style.position = 'fixed';
    photo.style.top = '50%';
    photo.style.left = '50%';
    photo.style.transform = 'translate(-50%, -50%) scale(2)';
    photo.style.zIndex = '9999';
  });

  photo.addEventListener('dblclick', () => {
    photo.style.position = '';
    photo.style.top = '';
    photo.style.left = '';
    photo.style.transform = '';
    photo.style.zIndex = '';
  });
});
window.addEventListener('beforeunload', function(event) {
  document.getElementById('backgroundAudio').pause();
});
