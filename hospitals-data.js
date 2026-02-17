// data/hospitalsData.js

        const hospitalsData = [
            { name: "مستشفى مصطفى باشا", wilaya: "الجزائر", baladia: "مصطفى باشا", phone: "023 45 67 89", lat: 36.7538, lon: 3.0588 },
            { name: "مستشفى نفيسة حمود", wilaya: "الجزائر", baladia: "حسين داي", phone: "023 67 89 10", lat: 36.7592, lon: 3.0922 },
            { name: "مستشفى بارني", wilaya: "الجزائر", baladia: "الحراش", phone: "023 89 10 11", lat: 36.7241, lon: 3.1431 },
            { name: "مستشفى وهران الجامعي", wilaya: "وهران", baladia: "وهران", phone: "041 34 56 78", lat: 35.6997, lon: -0.6419 },
            { name: "مستشفى قسنطينة", wilaya: "قسنطينة", baladia: "قسنطينة", phone: "031 45 67 89", lat: 36.365, lon: 6.6147 },
            { name: "مستشفى عنابة", wilaya: "عنابة", baladia: "عنابة", phone: "038 56 78 90", lat: 36.9023, lon: 7.7559 }
        ];




// تصدير البيانات للاستخدام في الصفحات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hospitalsData; // لـ Node.js
} else {
    // للاستخدام في المتصفح
    window.hospitalsData = hospitalsData;
}