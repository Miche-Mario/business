import {FormattedMessage} from 'react-intl';
import React from 'react'
const translate = (id, value = {}) => <FormattedMessage id={id} values={{...value}}/>

export default translate;