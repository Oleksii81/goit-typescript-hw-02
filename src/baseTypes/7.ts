/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  Saturday,
  Sunday,
}
function isWeekend(day: Weekend): boolean {
  return day === Weekend.Saturday || day === Weekend.Sunday;
}