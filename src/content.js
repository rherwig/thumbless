const $image = document.querySelector('meta[property="og:image"]');
const url = $image.getAttribute('content');

const $clickElement = document.querySelector('article > div');
$clickElement.addEventListener('click', () => location.href = url);
