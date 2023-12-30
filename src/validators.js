import { NAV_ITEMS } from '@/constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isChangeCategoryValid(value) {
	return isString(value) || isNull(value)
}

export function isString(value) {
	return typeof value === 'string'
}

function isNull(value) {
	return value === null
}