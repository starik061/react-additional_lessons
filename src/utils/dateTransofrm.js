import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';

export function getDate(dateInfo) {
  return formatDistanceToNow(new Date(dateInfo));
}

export const formatEventStart = start => {
  return format(new Date(start), 'Pp');
};
