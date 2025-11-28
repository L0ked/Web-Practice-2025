// склонение по правилам русского языка — проверяем последние 1-2 цифры
function pluralizeRecords(n) {
    let recordForm;
    let wasFoundForm;

    let lastDigit = n % 10;
    let lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        wasFoundForm = 'было найдено';
        recordForm = 'записей';
    } else if (lastDigit === 1) {
        wasFoundForm = 'была найдена';
        recordForm = 'запись';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        wasFoundForm = 'было найдено';
        recordForm = 'записи';
    } else {
        wasFoundForm = 'было найдено';
        recordForm = 'записей';
    }

    return `В результате выполнения запроса ${wasFoundForm} ${n} ${recordForm}`;
}

console.log(pluralizeRecords(1)); // была найдена 1 запись
console.log(pluralizeRecords(2)); // было найдено 2 записи
console.log(pluralizeRecords(5)); // было найдено 5 записей
console.log(pluralizeRecords(11)); // было найдено 11 записей