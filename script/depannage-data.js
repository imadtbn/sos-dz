// data/depannage-data.js

const depannageData = [
    { name: "أحمد بن علي", wilaya: "الجزائر", baladia: "باب الزوار", phone: "0550 11 22 33", lat: 36.7265, lon: 3.1817 },
    { name: "يوسف قادري", wilaya: "البليدة", baladia: "أولاد يعيش", phone: "0661 22 33 44", lat: 36.4700, lon: 2.8287 },
    { name: "سمير بوحفص", wilaya: "تيبازة", baladia: "شرشال", phone: "0772 33 44 55", lat: 36.6053, lon: 2.1900 },
    { name: "نذير بوزيد", wilaya: "وهران", baladia: "بئر الجير", phone: "0553 44 55 66", lat: 35.7200, lon: -0.5730 },
    { name: "كريم حملاوي", wilaya: "قسنطينة", baladia: "الخروب", phone: "0664 55 66 77", lat: 36.2639, lon: 6.6936 },
    { name: "طارق زروقي", wilaya: "عنابة", baladia: "البوني", phone: "0775 66 77 88", lat: 36.9029, lon: 7.7567 },
    { name: "عبد الرحمن لعريبي", wilaya: "سطيف", baladia: "العلمة", phone: "0556 77 88 99", lat: 36.1628, lon: 5.6900 },
    { name: "هشام بلماضي", wilaya: "تيارت", baladia: "قصر الشلالة", phone: "0667 88 99 00", lat: 35.2122, lon: 2.3189 },
    { name: "إلياس مرزوق", wilaya: "بسكرة", baladia: "طولقة", phone: "0778 99 00 11", lat: 34.7222, lon: 5.3789 },
    { name: "سفيان واضح", wilaya: "تلمسان", baladia: "مغنية", phone: "0559 00 11 22", lat: 34.8472, lon: -1.7444 }
];


// تصدير البيانات للاستخدام في الصفحات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = depannageDataData; // لـ Node.js
} else {
    // للاستخدام في المتصفح
    window.depannageData = depannageData;
}