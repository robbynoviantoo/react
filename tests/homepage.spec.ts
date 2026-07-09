import { test, expect } from '@playwright/test';

test.describe('E2E Test Halaman Utama & Detail Produk', () => {

  test('Harus memuat halaman utama dan menampilkan produk', async ({ page }) => {
    // 1. Pergi ke halaman utama
    await page.goto('/');

    // 2. Pastikan judul halaman sesuai metadata "Ancok"
    await expect(page).toHaveTitle('Ancok');

    // 3. Pastikan ada tombol/link detail produk yang terlihat
    const detailLink = page.locator('text=Lihat Detail').first();
    await expect(detailLink).toBeVisible();
  });

  test('Harus bisa navigasi ke halaman detail produk dan memuat spesifikasi', async ({ page }) => {
    // 1. Pergi ke halaman utama
    await page.goto('/');

    // 2. Ambil produk pertama dan nama produknya
    const firstProduct = page.locator('h2').first();
    const productName = await firstProduct.textContent();

    // 3. Klik tombol detail produk pertama
    await page.locator('text=Lihat Detail').first().click();

    // 4. Pastikan URL mengarah ke ID produk (bukan root lagi)
    await expect(page).toHaveURL(/\/\d+/);

    // 5. Pastikan nama produk di halaman detail sama dengan di halaman utama
    const detailTitle = page.locator('h1').first();
    await expect(detailTitle).toHaveText(productName || '');

    // 6. Pastikan spesifikasi produk dimuat
    await expect(page.locator('text=Spesifikasi:')).toBeVisible();
  });

  test('Navbar Mobile responsif dapat dibuka', async ({ page }) => {
    // 1. Set resolusi viewport ke mobile (HP)
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    // 2. Pastikan tombol menu burger muncul di mobile
    const menuBtn = page.locator('button:has-text("Menu")');
    await expect(menuBtn).toBeVisible();

    // 3. Klik tombol menu burger
    await menuBtn.click();

    // 4. Verifikasi link navigasi mobile (seperti "Home") muncul di layar
    await expect(page.getByRole('link', { name: 'Home' }).last()).toBeVisible();
  });

});
