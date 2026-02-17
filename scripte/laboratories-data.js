// data/laboratoriesData.js

// بيانات تجريبية للمخابر (يمكن استبدالها ب API حقيقي)
const laboratoriesData = [
    { name: "مخبر الإخاء للتحاليل", wilaya: "الجزائر", baladia: "المرادية", phone: "023 45 67 89", lat: 36.7538, lon: 3.0588 },
    { name: "مخبر الأمل", wilaya: "الجزائر", baladia: "حسين داي", phone: "023 67 89 10", lat: 36.7592, lon: 3.0922 },
    { name: "مخبر الفجر", wilaya: "الجزائر", baladia: "الحراش", phone: "023 89 10 11", lat: 36.7241, lon: 3.1431 },
    { name: "مخبر القدس", wilaya: "وهران", baladia: "وهران", phone: "041 34 56 78", lat: 35.6997, lon: -0.6419 },
    { name: "مخبر السلام", wilaya: "قسنطينة", baladia: "قسنطينة", phone: "031 45 67 89", lat: 36.365, lon: 6.6147 },
    { name: "مخبر النور", wilaya: "عنابة", baladia: "عنابة", phone: "038 56 78 90", lat: 36.9023, lon: 7.7559 },
    { name: "مخبر الياسمين", wilaya: "البليدة", baladia: "البليدة", phone: "025 12 34 56", lat: 36.4833, lon: 2.8333 },
    { name: "مخبر المنار", wilaya: "تيبازة", baladia: "تيبازة", phone: "024 78 90 12", lat: 36.5892, lon: 2.4475 }
];


// تصدير البيانات للاستخدام في الصفحات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = laboratoriesData; // لـ Node.js
} else {
    // للاستخدام في المتصفح
    window.laboratoriesData = laboratoriesData;
}