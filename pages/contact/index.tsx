import { FC, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useMutation } from 'react-query';
import { z, ZodType } from 'zod';

import Button from '@/components/button/button';
import ConfirmationModal from '@/components/confirmation-modal/confirmation-modal';
import InputField from '@/components/form-input/form-input';
import HeadElement from '@/components/head-element/head-element';

const submitEmail = async (contactFormData: ContactFormData): Promise<any> => {
    try {
        const response = await fetch('/api/mailer', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactFormData),
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        return response.json();
    } catch (error) {
        return Promise.reject(error);
    }
};

const ContactPage: FC = (): JSX.Element => {
    const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
    const [retries, setRetries] = useState<number>(0);
    const { mutate, isLoading, isSuccess } = useMutation(submitEmail);
    const intl = useIntl();
    const requiredErrorMessage: string = intl.formatMessage({
        id: 'pg.contact.validation.required',
    });
    const contactFormSchema: ZodType<ContactFormData> = z.object({
        email: z
            .string()
            .email(intl.formatMessage({ id: 'pg.contact.validation.email' })),
        senderName: z.string().min(1, { message: requiredErrorMessage }),
        subject: z.string().min(1, { message: requiredErrorMessage }),
        message: z.string().min(1, { message: requiredErrorMessage }),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        // setError,
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (contactFormData: ContactFormData) => {
        setShowConfirmationModal(true);
        mutate(contactFormData);
    };

    const onCloseButtonClick = (): void => {
        setShowConfirmationModal(false);
        reset();
        setRetries(0);
    };

    const onRetryButtonClick = (): void => {
        console.log('retry click', { retries })
        handleSubmit(onSubmit)();
        setRetries(retries + 1);
    };

    return (
        <>
            <HeadElement
                metaTitle={intl.formatMessage({
                    id: 'pg.contact.head.meta.title',
                })}
                metaContent={intl.formatMessage({
                    id: 'pg.contact.head.meta.content',
                })}
                metaBrandList={intl.formatMessage({ id: 'common.meta.brands' })}
            />
            <ConfirmationModal
                isVisible={showConfirmationModal}
                closeButtonClick={() => onCloseButtonClick()}
                isLoading={isLoading}
                isSuccess={isSuccess}
                retryButtonClick={() => onRetryButtonClick()}
                failedCompletely={retries > 1}
            />
            <main className='w-full rounded-md bg-stone-600 bg-opacity-90 py-4 px-6 text-stone-50 shadow-lg'>
                <div className='mb-4 text-center'>
                    <h2 className='text-xl font-medium opacity-80 md:text-2xl'>
                        <FormattedMessage id='pg.contact.title' />
                    </h2>
                    <p>
                        <FormattedMessage id='pg.contact.subtitle' />
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6' noValidate>
                    <InputField
                        type='text'
                        placeholder={intl.formatMessage({
                            id: 'pg.contact.place-holder.email',
                        })}
                        name='email'
                        register={register}
                        error={errors.email}
                        label={intl.formatMessage({
                            id: 'pg.contact.label.email',
                        })}
                    />
                    <InputField
                        type='text'
                        placeholder={intl.formatMessage({
                            id: 'pg.contact.place-holder.sender-name',
                        })}
                        name='senderName'
                        register={register}
                        error={errors.senderName}
                        label={intl.formatMessage({
                            id: 'pg.contact.label.sender-name',
                        })}
                    />
                    <InputField
                        type='text'
                        placeholder={intl.formatMessage({
                            id: 'pg.contact.place-holder.subject',
                        })}
                        name='subject'
                        register={register}
                        error={errors.subject}
                        label={intl.formatMessage({
                            id: 'pg.contact.label.subject',
                        })}
                    />
                    <InputField
                        type='text-area'
                        placeholder={intl.formatMessage({
                            id: 'pg.contact.place-holder.message',
                        })}
                        name='message'
                        register={register}
                        error={errors.message}
                        label={intl.formatMessage({
                            id: 'pg.contact.label.message',
                        })}
                    />
                    <Button
                        type='submit'
                        text={intl.formatMessage({
                            id: 'pg.contact.send-button',
                        })}
                        disabled={isLoading}
                        id='contact-form-submit-button'
                    />
                </form>
            </main>
        </>
    );
};

export default ContactPage;
