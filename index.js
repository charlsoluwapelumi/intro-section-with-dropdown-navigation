
const menuToggle = document.querySelector('.menu-open');
const navigation = document.querySelector('.nav');

const featuresBtn = document.querySelector("#features");
const companyBtn = document.querySelector("#company");
const featureBlog = document.querySelector(".feature-blog");
const companyBlog = document.querySelector(".company-blog");

menuToggle.addEventListener('click', function() {
    const visibility = navigation.getAttribute('data-visible');

    if (visibility === 'false') {
        navigation.setAttribute('data-visible', 'true');
        menuToggle.setAttribute('src', './images/icon-close-menu.svg');
    } else {
        navigation.setAttribute('data-visible', 'false');
        menuToggle.setAttribute('src', './images/icon-menu.svg');
    }
  });

featuresBtn.addEventListener('click', ()=>{
    if (featureBlog.classList.contains('hidden')) {
        featureBlog.classList.remove('hidden')
    } else {
        featureBlog.classList.add('hidden')
    }
});

companyBtn.addEventListener('click', ()=>{
    if (companyBlog.classList.contains('hidden')) {
        companyBlog.classList.remove('hidden')
    } else {
        companyBlog.classList.add('hidden')
    }
});