let menuBtn = document.getElementById('menu-btn');
let mobileMenu = document.getElementById('mobile-menu');
let menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

});

window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const allImages = document.querySelectorAll('img');
    let loadedImagesCount = 0;
    const totalImages = allImages.length;

    // دالة مسؤولة عن إخفاء الشاشة بعد تفعيل الفايد (Fade out)
    function hideLoadingScreen() {
        loadingScreen.classList.add('opacity-0');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // 500ms لتتوافق مع الـ duration-500 في التايلوند
    }

    // إذا لم يكن هناك صور في الصفحة أصلاً، تختفي الشاشة فوراً
    if (totalImages === 0) {
        hideLoadingScreen();
    } else {
        // المرور على كل الصور والتأكد من اكتمال تحميلها
        allImages.forEach((img) => {
            if (img.complete) {
                imageLoaded();
            } else {
                img.addEventListener('load', imageLoaded);
                img.addEventListener('error', imageLoaded); // حتى لو فشلت صورة لا تعلّق شاشة التحميل
            }
        });
    }

    

    function imageLoaded() {
        loadedImagesCount++;
        // عندما يتساوى عدد الصور المحملة مع العدد الإجمالي تختفي الشاشة
        if (loadedImagesCount >= totalImages) {
            hideLoadingScreen();
        }
    }
});