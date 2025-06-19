import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import GalleryPage from '@/pages/sold-archive/gallery/[bike]';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));
jest.mock('react-intl', () => ({
    useIntl: jest.fn(),
}));

describe('GalleryPage', () => {
    const closeImageModalMock = jest.fn();

    beforeEach(() => {
        jest.spyOn(React, 'useContext').mockImplementation(() => ({
            closeImageModal: closeImageModalMock,
        }));
        (useRouter as jest.Mock).mockReturnValue({
            isReady: false,
        });
        (useIntl as jest.Mock).mockReturnValue({
            formatMessage: ({ id }: { id: string }) => id,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the spinner until the router is ready', async () => {
        render(<GalleryPage />);

        const spinner: HTMLElement = await screen.findByTestId(
            'loading-spinner',
            {},
            { timeout: 2000 }
        );
        expect(spinner).toBeInTheDocument();
    });

    it('should render the kawasaki-h1ra gallery page', async () => {
        (useRouter as jest.Mock).mockReturnValue({
            isReady: true,
            query: { bike: 'kawasaki-h1ra' },
        });
        const { container } = render(<GalleryPage />);

        await waitFor(() => {
            const legend: HTMLElement = screen.getByText('pg.gallery.kawasaki-h1ra.name');
            expect(legend).toBeInTheDocument();
        });
        expect(container).toMatchSnapshot();
    });

    it('should render the harley-xr750-75 gallery page', async () => {
        (useRouter as jest.Mock).mockReturnValue({
            isReady: true,
            query: { bike: 'harley-xr750-75' },
        });
        const { container } = render(<GalleryPage />);

        await waitFor(() => {
            const legend: HTMLElement = screen.getByText(
                'pg.gallery.harley-xr750-75.name'
            );
            expect(legend).toBeInTheDocument();
        });
        expect(container).toMatchSnapshot();
    });

    it('should render the ducati-250 gallery page', async () => {
        (useRouter as jest.Mock).mockReturnValue({
            isReady: true,
            query: { bike: 'ducati-250' },
        });
        const { container } = render(<GalleryPage />);

        await waitFor(() => {
            const legend: HTMLElement = screen.getByText('pg.gallery.ducati-250.name');
            expect(legend).toBeInTheDocument();
        });
        expect(container).toMatchSnapshot();
    });

    it('should render the honda-dream gallery page', async () => {
        (useRouter as jest.Mock).mockReturnValue({
            isReady: true,
            query: { bike: 'honda-dream' },
        });
        const { container } = render(<GalleryPage />);

        await waitFor(() => {
            const legend: HTMLElement = screen.getByText('pg.gallery.honda-dream.name');
            expect(legend).toBeInTheDocument();
        });
        expect(container).toMatchSnapshot();
    });

    it('should render the harley-xr750-replica gallery page', async () => {
        (useRouter as jest.Mock).mockReturnValue({
            isReady: true,
            query: { bike: 'harley-xr750-replica' },
        });
        const { container } = render(<GalleryPage />);

        await waitFor(() => {
            const legend: HTMLElement = screen.getByText(
                'pg.gallery.harley-xr750-replica.name'
            );
            expect(legend).toBeInTheDocument();
        });
        expect(container).toMatchSnapshot();
    });

    it('should render the harley-xr750 gallery page', async () => {
        (useRouter as jest.Mock).mockReturnValue({
            isReady: true,
            query: { bike: 'harley-xr750' },
        });
        const { container } = render(<GalleryPage />);

        await waitFor(() => {
            const legend: HTMLElement = screen.getByText('pg.gallery.harley-xr750.name');
            expect(legend).toBeInTheDocument();
        });
        expect(container).toMatchSnapshot();
    });
});
