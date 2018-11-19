import Logo from '../logo';
import PieHeaderInfoCard from '../PieHeaderInfoCard';
import SignatureCard from '../SignatureCard';
import data from './data';

export default {
  name: 'header',
  components: {
    Logo,
    PieHeaderInfoCard,
    SignatureCard,
  },
  data() {
    return data();
  },
};
