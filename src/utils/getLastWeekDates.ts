import formatDate from "./formatDate";

export default function getLastWeekDates(): string[] {
    const today = new Date();
    const lastWeekDates: string[] = [];

    for (let i = 9; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        lastWeekDates.push(formatDate(date));
    }

    return lastWeekDates;
}