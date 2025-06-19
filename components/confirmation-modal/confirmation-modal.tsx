import React from 'react';

import { useIntl } from 'react-intl';

import Button from '../button/button';
import InstagramButton from '../instagram-button/instagram-button';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
import Spinner from '../spinner/spinner';
import TextDisplay from '../text-display/text-display';

type InfoModalProps = {
    isVisible: boolean;
    closeButtonClick: () => void;
    isLoading: boolean;
    isSuccess: boolean;
    retryButtonClick: () => void;
    failedCompletely: boolean;
};

const ConfirmationModal = ({
    isVisible,
    closeButtonClick,
    isLoading,
    isSuccess,
    retryButtonClick,
    failedCompletely,
}: InfoModalProps): JSX.Element | null => {
    const intl = useIntl();
    if (!isVisible) return null;

    const getTitleId = (): string => {
        if (isLoading) return 'comp.confirmation-modal.sending.title';
        if (failedCompletely) return 'comp.confirmation-modal.failed-completely.title';

        return isSuccess
            ? 'comp.confirmation-modal.sent.title'
            : 'comp.confirmation-modal.failed.title';
    };

    const renderTextContent = (): string[] => {
        if (isLoading) return [];
        if (failedCompletely)
            return [
                intl.formatMessage({
                    id: 'comp.confirmation-modal.failed-completely.text-1',
                }),
                intl.formatMessage({
                    id: 'comp.confirmation-modal.failed-completely.text-2',
                }),
            ];

        return isSuccess
            ? [
                  intl.formatMessage({
                      id: 'comp.confirmation-modal.sent.text-1',
                  }),
                  intl.formatMessage({
                      id: 'comp.confirmation-modal.sent.text-2',
                  }),
              ]
            : [
                  intl.formatMessage({
                      id: 'comp.confirmation-modal.failed.text-1',
                  }),
              ];
    };

    const renderCallsToAction = (): JSX.Element | null => {
        const closeButton: JSX.Element = (
            <Button
                text={intl.formatMessage({
                    id: 'comp.confirmation-modal.button.close',
                })}
                type='button'
                onClick={closeButtonClick}
                id='confirmation-modal-close-button'
            />
        );

        if (isLoading) return null;
        if (failedCompletely)
            return (
                <div className='space-y-4'>
                    <InstagramButton
                        altText={intl.formatMessage({
                            id: 'common.img.instagram-logo.alt',
                        })}
                    />
                    {closeButton}
                </div>
            );

        return isSuccess ? (
            closeButton
        ) : (
            <div className='flex justify-center space-x-6'>
                {closeButton}
                <Button
                    text={intl.formatMessage({
                        id: 'comp.confirmation-modal.button.retry',
                    })}
                    type='button'
                    onClick={retryButtonClick}
                    buttonColour='red'
                    id='confirmation-modal-retry-button'
                />
            </div>
        );
    };

    const childElement: JSX.Element = (
        <>
            <Spinner
                isLoading={isLoading}
                text={intl.formatMessage({
                    id: 'comp.spinner.sr.loading',
                })}
            />
            {renderCallsToAction()}
        </>
    );

    return (
        <ModalWrapper>
            <TextDisplay
                title={intl.formatMessage({ id: getTitleId() })}
                textContent={renderTextContent()}
                textContentCentred={true}
                childElement={childElement}
                childElementPosition='bottom'
                isOpaque={true}
                hasBorder={true}
                borderColour={isSuccess || isLoading ? 'green' : 'red'}
            />
        </ModalWrapper>
    );
};

export default ConfirmationModal;
