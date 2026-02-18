// بداية السكربت
let userLat = null, userLon = null;

// استرجاع الموقع المخزن
const savedLat = localStorage.getItem('userLat');
const savedLon = localStorage.getItem('userLon');
const savedTime = localStorage.getItem('locationTimestamp');
const ONE_HOUR = 60 * 60 * 1000;

if (savedLat && savedLon && savedTime && (Date.now() - savedTime < ONE_HOUR)) {
    userLat = parseFloat(savedLat);
    userLon = parseFloat(savedLon);
    document.getElementById('locationStatus').innerHTML = 
        '<i class="fas fa-check-circle"></i> تم استخدام موقعك المخزن';
    displayServices();
} else {
    displayServices(); // عرض بدون ترتيب
}
