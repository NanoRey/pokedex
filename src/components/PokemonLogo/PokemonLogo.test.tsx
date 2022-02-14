import React from 'react';
import { render, screen } from '@testing-library/react';
import { PokemonLogo } from './PokemonLogo';

describe('Test Pokemon Logo', () => {
    test('Should render', () => {
        render(<PokemonLogo logo={'image src'} />);
        const ImageLogo = screen.getByRole('img') as HTMLImageElement;
        expect(ImageLogo.src.includes('image')).toBeTruthy();
    });
});
