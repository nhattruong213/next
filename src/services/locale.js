'use server';

import { cookies } from 'next/headers';
import { defaultLocale } from 'src/config-global';


const COOKIE_NAME = 'odinbi_web';

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale) {
  cookies().set(COOKIE_NAME, locale);
}
