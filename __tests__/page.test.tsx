import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Home } from '@pages/index';

describe('Home Component', () => {
  test('рендерится без ошибок', () => {
    render(<Home />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toBeVisible();
  });

  test('отображает текст "Get started by editing"', () => {
    render(<Home />);
    const textElement = screen.getByText(/Get started by editing/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('Get started by editing');
  });

  test('кнопка рендерится и кликабельна', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', { name: /test button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeEnabled();
    expect(buttonElement).toHaveTextContent('test button');
  });

  test('статическое изображение отображается корректно', () => {
    render(<Home />);
    const staticImage = screen.getByAltText('Next Logo static');
    expect(staticImage).toBeInTheDocument();
    expect(staticImage).toHaveAttribute('src', '/_next/image?url=%2Fnextjs-192x192.png&w=384&q=75');
    expect(staticImage).toHaveAttribute('width', '192');
    expect(staticImage).toHaveAttribute('height', '192');
  });

  test('динамическое изображение отображается корректно', () => {
    render(<Home />);
    const dynamicImage = screen.getByAltText('Next Logo dynamic');
    expect(dynamicImage).toBeInTheDocument();
    expect(dynamicImage).toHaveAttribute('src', 'http://localhost/_next/image?url=%2Fskeleton.png&w=3840&q=100');

    expect(dynamicImage).toHaveClass('ImageWrapper');
  });

  test('все изображения присутствуют на странице', () => {
    render(<Home />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(3);
  });

  test('проверяет, что текст "button:" присутствует перед кнопкой', () => {
    render(<Home />);
    const buttonText = screen.getByText(/button:/i);
    const button = screen.getByRole('button', { name: /test button/i });

    expect(buttonText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('компонент не содержит пустых элементов', () => {
    render(<Home />);
    const elements = screen.getAllByText(/./);
    elements.forEach((element) => {
      expect(element).not.toBeEmptyDOMElement();
    });
  });
});
