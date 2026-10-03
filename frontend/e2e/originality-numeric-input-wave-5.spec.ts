import { expect, test } from '@playwright/test';
import { getCalculatorById, locales } from '../src/lib/i18n';

const tiny='0.'+'0'.repeat(400)+'1';
for(const locale of locales){
 const calculator=getCalculatorById('convert-radiation',locale)!;
 test(`${locale}: nonzero input underflow is a native error, exact zero stays usable`,async({page})=>{
  await page.goto(`${calculator.fullPath}?value=1&from=mSv&to=uSv`);
  await expect(page.getByTestId('calc-result-primary')).toBeVisible();
  await page.locator('#f-value').fill(tiny);
  const error=page.getByTestId('field-error-value');
  await expect(error).toBeVisible();await expect(page.locator('#f-value')).toHaveAttribute('aria-invalid','true');
  await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
  if(['en','de','es'].includes(locale))await expect(error).not.toContainText(/[А-Яа-яЁё]/);
  await page.locator('#f-value').fill('0');
  await expect(error).toHaveCount(0);await expect(page.getByTestId('calc-result-primary')).toHaveText('0');
 });
 test(`${locale}: query underflow survives reload as an error instead of becoming dose0`,async({page})=>{
  const query=new URLSearchParams({value:'1e-999',from:'mSv',to:'uSv'});
  await page.goto(`${calculator.fullPath}?${query}`);
  await expect(page.locator('#f-value')).toHaveValue('1e-999');
  await expect(page.getByTestId('field-error-value')).toBeVisible();
  await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
  await page.reload();await expect(page.locator('#f-value')).toHaveValue('1e-999');
  await expect(page.getByTestId('field-error-value')).toBeVisible();
 });
}
