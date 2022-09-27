import React from 'react'

import {Fragment} from 'react'
import { IntlProvider } from 'react-intl';
import {LOCALES} from './constants';
import messages from './messages'
import flatten from 'flat';

const Provider = ({children, locale = LOCALES.ENGLISH}) => (
    <IntlProvider textComponent={Fragment}
    locale={locale}
    messages={flatten(messages[locale])}>
        {children}
    </IntlProvider>
)
export default Provider;