export function dateToInputString(dateTime: Date | undefined) {
    if (!dateTime) {
        return '';
    }

    dateTime.setMinutes(dateTime.getMinutes() - dateTime.getTimezoneOffset());
    return dateTime.toISOString().slice(0,16);
};