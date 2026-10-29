# سایت GENYX FINANCE

سایت استاتیک و جدا از مینی‌اپ: فقط HTML و CSS و کمی JavaScript، بدون فریم‌ورک و بدون build. روی هر هاستی بالا میاد (هاست اشتراکی، Cloudflare Pages، Netlify، Vercel، Nginx، Caddy).

## فایل‌ها
| فایل | کاربرد |
|---|---|
| `index.html` | سایت یک‌صفحه‌ای مثل کارت ویزیت: معرفی GENYX FINANCE، بازارها، چهار سرویس، آمار، معرفی اپ GENYX با دکمه‌ی عضویت در بات، تماس |
| `404.html` | صفحه‌ی «پیدا نشد» |
| `assets/` | استایل، اسکریپت، لوگو، آیکون‌ها و تصویر اشتراک‌گذاری (`og-image.png`) |
| `robots.txt` ، `sitemap.xml` | برای گوگل |
| `site.webmanifest` | آیکون و رنگ برای موبایل |
| `_headers` | هدرهای امنیتی و کش، مخصوص Cloudflare Pages و Netlify |

## ۱. قبل از آپلود: دامنه رو تنظیم کن
همه‌جا آدرس موقت `https://example.com` گذاشته شده. با یک دستور با دامنه‌ی واقعی عوض می‌شه:
```bash
cd site
./set-domain.sh https://www.your-domain.com
```

## ۲. آپلود
- **هاست اشتراکی (cPanel و مشابه):** محتویات پوشه‌ی `site` رو داخل `public_html` آپلود کن.
- **Cloudflare Pages یا Netlify:** پوشه‌ی `site` رو drag & drop کن. نیازی به build command نیست.
- **Caddy روی سرور جدا:**
  ```
  www.your-domain.com {
    root * /var/www/genyx-site
    encode zstd gzip
    file_server
    handle_errors { rewrite * /404.html
      file_server }
  }
  ```

## ۳. بعد از آپلود (برای سئو)
1. توی [Google Search Console](https://search.google.com/search-console) دامنه رو ثبت کن و `https://your-domain.com/sitemap.xml` رو Submit کن.
2. تصویر اشتراک‌گذاری رو با [opengraph.xyz](https://www.opengraph.xyz) چک کن.
3. سرعت رو با [PageSpeed Insights](https://pagespeed.web.dev) چک کن. سایت بدون فونت و اسکریپت خارجیه و باید امتیاز خیلی بالایی بگیره.

## سئوی انجام‌شده
- عنوان و توضیحات مخصوص هر صفحه، آدرس canonical و تگ‌های robots
- Open Graph و Twitter Card با تصویر ۱۲۰۰×۶۳۰
- داده‌ی ساختاریافته (JSON-LD): Organization و FinancialService، اپ تلگرام (SoftwareApplication) و WebSite
- HTML معنایی (یک H1 در هر صفحه، سلسله‌مراتب درست تیترها، `nav`/`main`/`footer`)
- `sitemap.xml` و `robots.txt`
- بدون درخواست به سرویس‌های خارجی، CSS و JS سبک، سازگار با موبایل و حالت کاهش انیمیشن

## لینک تماس
همه‌ی دکمه‌های تماس به `https://t.me/smartgenyx_bot` می‌رن. اگه آیدی یا ایمیل دیگه‌ای می‌خوای، توی `index.html` عوضش کن.
