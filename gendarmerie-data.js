// data/gendarmerie-Data.js

        const gendarmerieData = [
            { name: " الجزائر وسط", wilaya: "الجزائر", baladia: "الجزائر وسط", phone: "023 45 67 89", lat: 36.7762, lon: 3.0585 },
            { name: "فرقة الدرك الوطني - حسين داي", wilaya: "الجزائر", baladia: "حسين داي", phone: "023 67 89 10", lat: 36.7592, lon: 3.0922 },
            { name: "فرقة الدرك الوطني - الحراش", wilaya: "الجزائر", baladia: "الحراش", phone: "023 89 10 11", lat: 36.7241, lon: 3.1431 },
            { name: "فرقة الدرك الوطني - وهران", wilaya: "وهران", baladia: "وهران", phone: "041 34 56 78", lat: 35.6997, lon: -0.6419 },
            { name: "فرقة الدرك الوطني - قسنطينة", wilaya: "قسنطينة", baladia: "قسنطينة", phone: "031 45 67 89", lat: 36.365, lon: 6.6147 },
            { name: "فرقة الدرك الوطني - عنابة", wilaya: "عنابة", baladia: "عنابة", phone: "038 56 78 90", lat: 36.9023, lon: 7.7559 },
            { name: "فرقة الدرك الوطني - البليدة", wilaya: "البليدة", baladia: "البليدة", phone: "025 12 34 56", lat: 36.4833, lon: 2.8333 },
            { name: "فرقة الدرك الوطني - تيبازة", wilaya: "تيبازة", baladia: "تيبازة", phone: "024 78 90 12", lat: 36.5892, lon: 2.4475 }
        ];



// تصدير البيانات للاستخدام في الصفحات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gendarmerieData; // لـ Node.js
} else {
    // للاستخدام في المتصفح
    window.gendarmerieData = gendarmerieData;
}