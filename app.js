const shareBtn = document.querySelector('.btn-share');
const shareLinks = document.querySelector('.share__links');

shareBtn.addEventListener('click', () => {
  shareLinks.classList.toggle('hide');
});
