import React from 'react';

import Button from '../button/button';
import InstagramButton from '../instagram-button/instagram-button';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
import { Spinner } from '../spinner/spinner';
import { TextDisplay } from '../text-display/text-display';

import { useIntl } from 'react-intl';

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

  const renderTitle = (): string => {
    if (isLoading) return 'comp.confirmation-modal.sending.title';
    if (failedCompletely)
      return 'comp.confirmation-modal.failed-completely.title';

    return isSuccess
      ? 'comp.confirmation-modal.sent.title'
      : 'comp.confirmation-modal.failed.title';
  };

  const renderTextContent = (): string[] => {
    if (isLoading) return [];
    if (failedCompletely)
      return [
        'comp.confirmation-modal.failed-completely.text-1',
        'comp.confirmation-modal.failed-completely.text-2',
      ];

    return isSuccess
      ? [
          'comp.confirmation-modal.sent.text-1',
          'comp.confirmation-modal.sent.text-2',
        ]
      : ['comp.confirmation-modal.failed.text-1'];
  };

  const renderCallsToAction = (): JSX.Element | null => {
    const closeButton: JSX.Element = (
      <Button
        text={intl.formatMessage({ id: 'comp.confirmation-modal.button.close' })}
        type='button'
        onClick={closeButtonClick}
      />
    );

    if (isLoading) return null;
    if (failedCompletely)
      return (
        <div className='space-y-4'>
          <InstagramButton />
          {closeButton}
        </div>
      );

    return isSuccess ? (
      closeButton
    ) : (
      <div className='flex justify-center space-x-6'>
        {closeButton}
        <Button
          // text='comp.confirmation-modal.button.retry'
          text={intl.formatMessage({ id: 'comp.confirmation-modal.button.retry' })}
          type='button'
          onClick={retryButtonClick}
          buttonColour='red'
        />
      </div>
    );
  };

  const childElement: JSX.Element = (
    <>
      <Spinner isLoading={isLoading} />
      {renderCallsToAction()}
    </>
  );

  return (
    <ModalWrapper>
      <TextDisplay
        title={renderTitle()}
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
