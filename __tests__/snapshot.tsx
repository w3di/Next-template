import { render } from '@testing-library/react';

import { Home } from '@pages/index';

//создаем снапшоп главной страницы

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
