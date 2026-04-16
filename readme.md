# Spendful Web

Static marketing website for Spendful, a calm spending journal app for iOS and Android.

The site is built with Astro 6 and Tailwind CSS 4. It is mostly static HTML with a small amount of inline client-side JavaScript for theme switching, the mobile menu, testimonials, and analytics.

## Tech Stack

- Astro 6
- Tailwind CSS 4
- `@lucide/astro` icons
- Fontsource variable fonts: Inter and Playfair Display
- Astro image optimization for local screenshots
- PostHog for website analytics when configured

## Project Structure

```text
src/
  assets/       App screenshots and local testimonial images
  components/   Homepage sections, header, footer, analytics
  layouts/      Shared page shells
  pages/        File-based routes
  styles/       Global Tailwind theme and utilities
public/         Static icons, app store badges, OG image
```

Important files:

- `src/pages/index.astro` composes the homepage sections.
- `src/layouts/main.astro` wraps all pages with metadata, header, footer, and analytics.
- `src/layouts/content.astro` wraps markdown-style pages.
- `src/styles/global.css` defines design tokens and Tailwind utilities.
- `src/components/analytics.astro` owns PostHog setup and custom event tracking.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

Development server:

```bash
http://localhost:4321
```

No test or lint commands are currently configured.

## Environment

Create a local `.env` file when you want analytics enabled during a production-style build or deployed environment.

```bash
PUBLIC_POSTHOG_KEY=phc_your_project_key
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

`.env` is ignored by git.

If `PUBLIC_POSTHOG_KEY` is missing, analytics is not rendered.

## Analytics

Website analytics is powered by PostHog when `PUBLIC_POSTHOG_KEY` is set.

The current implementation starts analytics immediately on page load. There is no consent banner in the UI.

Captured signals include:

- Product analytics events
- Autocaptured clicks and interactions
- Page views and page leaves
- CTA clicks
- App Store and Google Play clicks
- Navigation and external link clicks
- FAQ opens
- Section views
- Scroll depth
- Dead clicks and rage clicks
- Heatmaps
- Session replay
- Console logs
- Browser errors and unhandled promise rejections
- Campaign parameters such as `utm_source`, `utm_medium`, `utm_campaign`, `gclid`, `fbclid`, and `ttclid`
- Page performance timing
- Web Vitals-style browser metrics where supported
- Device, viewport, language, timezone, network, and browser context where available

Session replay is configured with input masking:

```js
session_recording: {
  maskAllInputs: true,
  maskTextSelector: '[data-ph-mask]',
}
```

PostHog project settings still need to allow Session Replay and Heatmaps. The code enables them client-side, but project settings can block ingestion.

## Privacy Copy

Because analytics and session replay are enabled when configured, keep `src/pages/privacy.md` in sync with the actual behavior.

The current privacy policy discloses:

- PostHog website analytics
- Approximate country-level location
- Campaign/referrer tracking
- CTA and navigation clicks
- Page performance
- Browser errors and console logs
- Heatmaps and session replay
- Local-first app data handling

If the analytics behavior changes, update the privacy page in the same commit.

## Routes

- `/` homepage
- `/privacy/` privacy policy
- `/terms/` terms of use
- `/support/` support page
- `/questions/` FAQ page

## Design Notes

The site uses a soft editorial style:

- Serif display headings
- Teal primary color
- Orange tertiary accents
- Light and dark mode support
- Large rounded screenshot frames
- Calm, privacy-forward product copy

Theme tokens live in `src/styles/global.css`.

## Deployment Checklist

Before deploying:

1. Run `npm run build`.
2. Set `PUBLIC_POSTHOG_KEY` in the deployment environment.
3. Set `PUBLIC_POSTHOG_HOST` to `https://us.i.posthog.com`.
4. Confirm Session Replay is enabled in PostHog project settings.
5. Confirm Heatmaps are enabled in PostHog project settings.
6. Visit the deployed site and verify events arrive in PostHog.
7. Click both App Store and Google Play badges and verify `store_badge_click` events.
8. Scroll through the homepage and verify `scroll_depth_reached` and `section_viewed` events.

## Store Links

App Store:

```text
https://apps.apple.com/app/id6757114071
```

Google Play:

```text
https://play.google.com/store/apps/details?id=com.spendful.app
```

These links are used in the hero and CTA sections.

## Notes

- This is a static site. There are no server routes or API endpoints.
- App screenshots are optimized by Astro when imported from `src/assets`.
- Some feature section images are remote Googleusercontent URLs. Consider replacing them with local assets if long-term stability matters.
- The site supports dark mode using a `localStorage` theme preference.
