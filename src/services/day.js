import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ja';

dayjs.extend(localizedFormat)

export const setDayjsLocale = (locale) => {
  dayjs.locale(locale || 'en');
};

export { dayjs };