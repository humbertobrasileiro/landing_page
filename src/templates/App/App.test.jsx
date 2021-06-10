import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { mockBase } from '../Base/mock';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home {...mockBase} />);
  });
});
