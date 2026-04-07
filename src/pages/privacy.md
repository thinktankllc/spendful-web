---
layout: ../layouts/content.astro
title: Privacy Policy
---

**Last updated**: March 2026

Spendful is “a calm, local-first spend awareness app designed to help you gently notice your spending.” The vast majority of your data never leaves your device. This policy explains what data is stored, what optional features may transmit data externally, and how that information is handled.

Spendful does not require an account or sign-in to use the app.

## Data Stored on Your Device

All core app data is stored locally using your device’s secure storage and is never sent to Spendful’s servers. This includes:

- Spending entries (date, amount, category, currency, note)
- Recurring spending templates
- Custom categories
- Journal entries
- App settings (theme, currency, notification preferences)
- Subscription and trial status

Your data remains on your device unless you choose to export it.

You can export all of your data at any time from within the app. Exported files are saved to your device and are never uploaded by Spendful.

If you uninstall the app, all locally stored data is removed from your device.

## AI Features (Optional)
Spendful offers optional AI-powered features that require an internet connection. These features send limited data to a third-party AI provider to perform the requested task. The app functions fully without these features.

AI requests are sent directly from your device. Spendful does not operate servers that store AI requests or responses.

### Receipt Scanning
When you choose to scan a receipt:

- A photo is captured using your camera or selected from your photo library
- The image is sent to an AI service (OpenAI) for processing
- The service extracts information such as amount, date, merchant name, and a suggested category

Spendful does not store receipt images externally. The app requests camera or photo library access only when you choose to scan a receipt.

### Spending Insights

If you request an insight, Spendful sends a summary of recent spending entries to generate a short reflection.

This summary may include:

- Dates of entries
- Amounts
- Categories
- Notes you have written

Previous insights may be included to reduce repetition. No identifying information such as name, email address, or device identifier is included in these requests.

> **What OpenAI receives**: Receipt images and anonymised spending summaries. Requests are sent directly from your device using an API key. OpenAI’s handling of this data is governed by [OpenAI’s Privacy Policy](https://openai.com/policies/privacy-policy). By default, OpenAI does not use API data to train models.

## Currency Conversion (Optional)

If you change your default currency and choose to convert existing entries, Spendful retrieves exchange rates from the Exchange Rate API ([open.er-api.com](https://open.er-api.com)). Only the currency code (for example “USD”) is transmitted. No personal or financial data is included.

## In-App Purchases

Subscriptions and purchases are processed entirely by Apple (App Store) or Google (Google Play). Spendful does not receive or store payment details.

Purchase validation is handled on-device using information returned by the platform.

Any data collected during the purchase process is governed by Apple’s or Google’s respective privacy policies.

## Push Notifications

If you enable daily reminders, Spendful schedules local notifications on your device. Notification schedules remain entirely on your device and are not transmitted externally.

## Analytics and Tracking

Spendful contains no analytics, advertising, crash reporting, or third-party tracking.

This means:

- No telemetry
- No behavioral tracking
- No advertising identifiers
- No user profiling

Your activity inside the app is not monitored or transmitted.

## Summary of External Data Flows
|Feature|Data sent externally|Recipient|Optional?|
|-|-|-|-|
|Receipt Scanning |Receipt image (processed)|OpenAI API|Yes|
|AI Insights|Spending summaries (dates, amounts, categories, notes)|OpenAI API|Yes|
|Currency Conversion|Currency code (e.g. “USD”)|open.er-api.com|Yes|
|In-App Purchases|Purchase transaction|Apple / Google|Yes (premium features)|
|All other features|Nothing — stored locally|—|N/A|

## Children’s Privacy

Spendful is not directed at children under the age of 13. We do not knowingly collect personal information from children.

## Changes to This Policy

If we make material changes to this policy, we will update the “Last updated” date at the top of this document. Continued use of the app after changes constitutes acceptance of the revised policy.

## Contact

If you have questions about this privacy policy, please contact:

[buihdk@gmail.com](mailto:buihdk@gmail.com)
