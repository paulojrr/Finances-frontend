import pt from 'date-fns/locale/pt'; // eslint-disable-line no-use-before-define
import { format } from 'date-fns'; // eslint-disable-line no-use-before-define

const formatDate = (value: Date): string =>
  format(value, 'dd/MM/yyyy', { locale: pt });

export default formatDate;
