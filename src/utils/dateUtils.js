export default class DateUtils {
    static toUkDate(unixTimeSeconds) {
        return new Date(
            new Date(unixTimeSeconds * 1000)
              .toLocaleString('en-GB', { timeZone: 'Europe/London' })
            )
    }
}

