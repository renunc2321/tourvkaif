import { PAGE_CLIENTS } from '@/constants'
import { isPageValid } from '@/validators'


export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_CLIENTS

  return PAGE_CLIENTS
}

export function formatDate(dateString) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const dateParts = dateString.split('-');
  const day = dateParts[2];
  const monthIndex = parseInt(dateParts[1]) - 1;
  const month = months[monthIndex];

  return `${day} ${month}`;
}

export function formatTimeRange(timeString) {
  const times = timeString.split(' ')
  return `${times[0]} - ${times[1]}`
}

export function formatDurationAndType(timeString, flightType) {
  const times = timeString.split(' ');
  const startTime = times[0];
  const endTime = times[1];

  const startHours = parseInt(startTime.split(':')[0]);
  const startMinutes = parseInt(startTime.split(':')[1]);

  const endHours = parseInt(endTime.split(':')[0]);
  const endMinutes = parseInt(endTime.split(':')[1]);

  const durationHours = endHours - startHours;
  const durationMinutes = endMinutes - startMinutes;

  const formattedDuration = `${durationHours} ч. ${Math.abs(durationMinutes)} м`;
  const formattedResult = `${formattedDuration}, ${flightType}`;

  return formattedResult;
}

export function formatPhoneNumber(phoneNumber) {
  const digits = phoneNumber.replace(/\D/g, '');
  
  if (digits.length !== 11) {
    return 'Некорректный номер';
  }

  const countryCode = `+${digits.slice(0, 1)}`;
  const areaCode = digits.slice(1, 4);
  const firstPart = digits.slice(4, 7);
  const secondPart = digits.slice(7);

  return `${countryCode} (${areaCode}) ${firstPart} ${secondPart}`;
}
