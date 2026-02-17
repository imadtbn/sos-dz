// data/doctorsData.js

const doctorsData = [
    { firstName: "محمد", lastName: "بن علي", specialty: "طب الأسنان", phone: "0550123456", wilaya: "الجزائر", baladia: "باش جراح", address: "شارع ديدوش مراد", lat: 36.7538, lon: 3.0588, workDays: "الأحد - الخميس 9ص-5م", image: null },
    { firstName: "فاطمة", lastName: "زهراء", specialty: "طب الأعصاب", phone: "0550987654", wilaya: "وهران", baladia: "السانية", address: "حي الأطباء", lat: 35.6971, lon: -0.6308, workDays: "الأحد - الأربعاء 10ص-6م", image: null },
    { firstName: "عبد الرحمن", lastName: "بوزيد", specialty: "الطب الداخلي", phone: "0550112233", wilaya: "قسنطينة", baladia: "الخروب", address: "شارع 1 نوفمبر", lat: 36.3650, lon: 6.6147, workDays: "السبت - الخميس 8ص-4م", image: null },
    { firstName: "سلمى", lastName: "حساني", specialty: "طب الأطفال", phone: "0550445566", wilaya: "عنابة", baladia: "عنابة", address: "شارع العربي بن مهيدي", lat: 36.9000, lon: 7.7667, workDays: "الأحد - الثلاثاء 9ص-3م", image: null },
    { firstName: "لخضر", lastName: "منصوري", specialty: "الجراحة العامة", phone: "0550778899", wilaya: "البليدة", baladia: "بوفاريك", address: "شارع فلسطين", lat: 36.4700, lon: 2.8330, workDays: "السبت - الأربعاء 10ص-7م", image: null },
    { firstName: "نورة", lastName: "بكوش", specialty: "طب النساء والتوليد", phone: "0550334455", wilaya: "سطيف", baladia: "سطيف", address: "شارع العقيد عميروش", lat: 36.1900, lon: 5.4100, workDays: "الأحد - الخميس 9ص-5م", image: null },
    { firstName: "كمال", lastName: "حمدوش", specialty: "طب العيون", phone: "0550667788", wilaya: "تيزي وزو", baladia: "تيزي وزو", address: "شارع الإخوة بوعلام", lat: 36.7169, lon: 4.0497, workDays: "الاثنين - الجمعة 8ص-2م", image: null },
    { firstName: "جمال", lastName: "عياشي", specialty: "طب الأنف والأذن والحنجرة", phone: "0550223344", wilaya: "تلمسان", baladia: "تلمسان", address: "شارع الإمام", lat: 34.8828, lon: -1.3167, workDays: "الأحد - الخميس 10ص-6م", image: null },
    { firstName: "وهيبة", lastName: "عبدلي", specialty: "طب الأعصاب", phone: "0550556677", wilaya: "باتنة", baladia: "باتنة", address: "شارع الإستقلال", lat: 35.5559, lon: 6.1741, workDays: "السبت - الأربعاء 9ص-3م", image: null },
    { firstName: "إبراهيم", lastName: "بوجمعة", specialty: "طب الأسنان", phone: "0550889900", wilaya: "الشلف", baladia: "الشلف", address: "شارع محمد خميستي", lat: 36.1653, lon: 1.3345, workDays: "الأحد - الخميس 8ص-2م", image: null },
    { firstName: "كريمة", lastName: "زروقي", specialty: "الطب الداخلي", phone: "0550123789", wilaya: "المسيلة", baladia: "المسيلة", address: "حي 5 جويلية", lat: 35.7058, lon: 4.5419, workDays: "السبت - الأربعاء 10ص-5م", image: null },
    { firstName: "علي", lastName: "مزياني", specialty: "طب الأطفال", phone: "0550456789", wilaya: "برج بوعريريج", baladia: "برج بوعريريج", address: "شارع الإخوة مرسلي", lat: 36.0732, lon: 4.7611, workDays: "الأحد - الخميس 9ص-4م", image: null },
    { firstName: "نوال", lastName: "بلخير", specialty: "الجراحة العامة", phone: "0550891234", wilaya: "بومرداس", baladia: "بومرداس", address: "شارع 20 أوت", lat: 36.7667, lon: 3.4667, workDays: "الاثنين - الجمعة 10ص-6م", image: null },
    { firstName: "مصطفى", lastName: "لعجال", specialty: "طب النساء والتوليد", phone: "0550234567", wilaya: "المدية", baladia: "المدية", address: "شارع أحمد زبانة", lat: 36.2642, lon: 2.7539, workDays: "السبت - الأربعاء 9ص-5م", image: null },
    { firstName: "جميلة", lastName: "بوقصة", specialty: "طب العيون", phone: "0550678901", wilaya: "تيارت", baladia: "تيارت", address: "شارع الأمير عبد القادر", lat: 35.3710, lon: 1.3160, workDays: "الأحد - الخميس 8ص-2م", image: null },
    { firstName: "مراد", lastName: "بوبكر", specialty: "طب الجلدية", phone: "0550345678", wilaya: "سيدي بلعباس", baladia: "سيدي بلعباس", address: "شارع فلسطين", lat: 35.1900, lon: -0.6300, workDays: "السبت - الأربعاء 9ص-3م", image: null },
    { firstName: "نادية", lastName: "قداش", specialty: "طب الأسنان", phone: "0550789012", wilaya: "مستغانم", baladia: "مستغانم", address: "شارع بن بولعيد", lat: 35.9311, lon: 0.0892, workDays: "الأحد - الخميس 9ص-5م", image: null },
    { firstName: "عبد القادر", lastName: "سعدي", specialty: "طب الأعصاب", phone: "0550456123", wilaya: "ورقلة", baladia: "ورقلة", address: "حي النصر", lat: 31.9556, lon: 5.3411, workDays: "السبت - الأربعاء 8ص-4م", image: null },
    { firstName: "فضيلة", lastName: "بوعلام", specialty: "الطب الداخلي", phone: "0550893456", wilaya: "بشار", baladia: "بشار", address: "شارع 1 نوفمبر", lat: 31.6167, lon: -2.2167, workDays: "الأحد - الخميس 10ص-6م", image: null },
    { firstName: "أمين", lastName: "صدار", specialty: "طب الأسنان", phone: "0557609274", wilaya: "البيدة", baladia: "بني مراد", address: "شارع القدس", lat: 36.5334714, lon: 2.8087707, workDays: "السبت - الخميس 9ص-16م", image: null },

    // يمكن إضافة المزيد من الأطباء حتى 50...
];


// تصدير البيانات للاستخدام في الصفحات الأخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = doctorsData; // لـ Node.js
} else {
    // للاستخدام في المتصفح
    window.doctorsData = doctorsData;
}