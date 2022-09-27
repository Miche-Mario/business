import {LOCALES} from '../i18n/constants'
import { getFromStorage } from '../../utils/localStorage'
export default {
    locale: getFromStorage('locale') || LOCALES.ITALIEN
}