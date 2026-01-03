// Changes dates to the format like Monday 12 May, 2025
export function dateToFormatString(date: Date):string{

    const days_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months_of_year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const current_day_of_week = days_of_week[date.getDay()]
    const current_month = months_of_year[date.getMonth()]
    const current_date = date.getDate()
    const current_year = date.getFullYear()
    const formatted_date = `${current_day_of_week} ${current_date} ${current_month}, ${current_year}`

    return formatted_date
}