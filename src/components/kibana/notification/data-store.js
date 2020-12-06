import { Comparators } from '@elastic/eui/es/services/sort';
import { Random } from '@elastic/eui/es/services/random';
import { times } from '@elastic/eui/es/services/utils';

const random = new Random();

const createCountries = () => [
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'US', name: 'United States', flag: '🇺🇲' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'CG', name: 'Congo', flag: '🇨🇬' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'FJ', name: 'Fiji', flag: '🇫🇯' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: 'HT', name: 'Haiti', flag: '🇭🇹' },
  { code: 'LB', name: 'Lebanon', flag: '🇱🇧' },
  { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'SO', name: 'Somalia', flag: '🇸🇴' },
  { code: 'TN', name: 'Tunisia', flag: '🇹🇳' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: 'ZM', name: 'Zambia', flag: '🇿🇲' },
];

const messages = [
  '[Flights] Flight Count and Average Ticket Price',
  '2020 Global Marketing Analysis',
  'Clinton',
  'Igor',
  undefined,
  'Drew',
  null,
  'Rashid',
  undefined,
  'John',
];

const github = [
  'martijnvg',
  'elissaw',
  'clintongormley',
  'imotov',
  'karmi',
  'drewr',
  'HonzaKral',
  'rashidkpc',
  'jordansissel',
  'silne30',
];

const dob = new Date(1980, 1, 1);

const createUsers = () => {
  return times(20, (index) => {
    return {
      id: index,
      messagse: index < 10 ? messages[index] : messages[index - 10],
      github: index < 10 ? github[index] : github[index - 10],
      dateOfBirth: dob,
      online: index % 2 === 0,
    };
  });
};

export const createDataStore = () => {
  const countries = createCountries();
  const users = createUsers();

  return {
    countries,
    users,

    findUsers: (pageIndex, pageSize, sortField, sortDirection) => {
      let items;

      if (sortField) {
        items = users
          .slice(0)
          .sort(
            Comparators.property(sortField, Comparators.default(sortDirection))
          );
      } else {
        items = users;
      }

      let pageOfItems;

      if (!pageIndex && !pageSize) {
        pageOfItems = items;
      } else {
        const startIndex = pageIndex * pageSize;
        pageOfItems = items.slice(
          startIndex,
          Math.min(startIndex + pageSize, items.length)
        );
      }

      return {
        pageOfItems,
        totalItemCount: items.length,
      };
    },
  };
};
