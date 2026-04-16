export const SITE = {
  name: 'Spendful',
  url: 'https://spendful.io',
  description:
    'Spendful is a privacy-first spending journal for iPhone and Android. Track daily expenses without bank links, account setup, or budgeting pressure.',
  email: 'buihdk@gmail.com',
  appStoreUrl: 'https://apps.apple.com/app/id6757114071',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.spendful.app',
  ogImage: '/og.png',
  logo: '/apple-touch-icon.png',
}

export const INDEX_NOW_KEY = '9d7f0a2d9c984f0aa0a7f74a5f4c7b2d'
export const LAST_UPDATED = '2026-04-16'

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return new URL(path, SITE.url).toString()
}

export const KEYWORDS = [
  'spending journal',
  'mindful spending app',
  'spending tracker',
  'expense tracker',
  'budgeting app alternative',
  'spending tracker without bank account',
  'expense tracker without bank connection',
  'privacy-first expense tracker',
  'local-first finance app',
  'daily spending tracker',
  'receipt scanner app',
  'AI spending insights',
  'iPhone spending tracker',
  'Android spending tracker',
]

export const SEO_LANDING_PAGES = [
  {
    slug: 'about',
    title: 'About Spendful',
    description:
      'Spendful is a privacy-first spending journal for iPhone and Android that helps you understand daily spending without bank links or budgeting pressure.',
    eyebrow: 'About Spendful',
    hero: 'A calm spending journal for everyday awareness.',
    intro:
      'Spendful helps people notice where their money goes through a simple daily check-in. It is built for awareness, not guilt, and it does not require a bank connection or an account.',
    keywords: ['Spendful app', 'spending journal app', 'privacy-first finance app'],
    sections: [
      {
        heading: 'What Spendful Does',
        body:
          'Spendful lets you log spending entries, organize categories, set recurring expenses, write journal notes, review weekly or monthly patterns, and export your data as CSV or JSON.',
      },
      {
        heading: 'What Makes It Different',
        body:
          'Most finance apps ask for bank links, budgets, alerts, or heavy setup. Spendful keeps the practice lighter: one quick check-in, local app data, optional AI features, and a clearer sense of your spending pace.',
      },
      {
        heading: 'Who It Is For',
        body:
          'Spendful is for people who want a simple expense tracker, a mindful spending journal, or a private budgeting app alternative without connecting financial accounts.',
      },
    ],
    faq: [
      {
        q: 'What is Spendful?',
        a: 'Spendful is a spending journal app for iPhone and Android. It helps you track daily expenses and notice spending patterns without bank links or strict budgets.',
      },
      {
        q: 'Who makes Spendful?',
        a: 'Spendful is developed by Khoa Bui. The official website is spendful.io.',
      },
    ],
  },
  {
    slug: 'spending-tracker-without-bank-account',
    title: 'Spending Tracker Without Bank Account Links',
    description:
      'Track expenses without connecting your bank account. Spendful is a privacy-first spending journal for iPhone and Android.',
    eyebrow: 'No bank links',
    hero: 'Track spending without connecting your bank.',
    intro:
      'Spendful is a spending tracker for people who do not want to connect a bank account. You enter purchases yourself or use optional receipt scanning, so your daily spending record stays intentional and under your control.',
    keywords: ['spending tracker without bank account', 'expense tracker no bank connection', 'budget app without linking bank'],
    sections: [
      {
        heading: 'Manual Tracking Keeps You Aware',
        body:
          'Bank feeds can turn spending into background noise. Spendful keeps tracking simple and deliberate, so each entry becomes a quick moment of awareness.',
      },
      {
        heading: 'No Account Required',
        body:
          'Spendful does not require sign-in to use the core app. Your spending entries, notes, categories, and settings are stored locally on your device.',
      },
      {
        heading: 'A Private Budgeting Alternative',
        body:
          'Spendful is not built around strict budgets or financial account aggregation. It is a calmer way to record purchases, review patterns, and understand where money goes.',
      },
    ],
    faq: [
      {
        q: 'Can I use Spendful without linking a bank account?',
        a: 'Yes. Spendful does not connect to your bank. You can track purchases manually and use optional receipt scanning when you want faster entry.',
      },
      {
        q: 'Is Spendful a good alternative to bank-connected budgeting apps?',
        a: 'Yes, if you want awareness without sharing bank credentials. Spendful focuses on simple tracking, local data, and daily reflection.',
      },
    ],
  },
  {
    slug: 'mindful-spending-journal',
    title: 'Mindful Spending Journal App',
    description:
      'Build a calmer spending habit with Spendful, a mindful spending journal that helps you notice purchases without pressure.',
    eyebrow: 'Mindful spending',
    hero: 'A spending journal for noticing, not judging.',
    intro:
      'Spendful turns expense tracking into a small daily reflection. Instead of forcing limits or streaks, it helps you see what you bought, why it mattered, and how your month is unfolding.',
    keywords: ['mindful spending journal', 'spending awareness app', 'daily spending journal'],
    sections: [
      {
        heading: 'One Daily Check-In',
        body:
          'Use Spendful in under a minute a day. Add what you spent, choose a category, and write a note when context matters.',
      },
      {
        heading: 'No Pressure Mechanics',
        body:
          'Spendful avoids streaks, rankings, and guilt-based alerts. The goal is steady awareness rather than perfect behavior.',
      },
      {
        heading: 'Patterns Without Noise',
        body:
          'Review recent days, weeks, and months to understand your spending rhythm. Spendful helps you notice patterns before they become surprises.',
      },
    ],
    faq: [
      {
        q: 'What is a mindful spending journal?',
        a: 'A mindful spending journal is a simple record of purchases and context. It helps you notice spending habits without relying on strict budgets.',
      },
      {
        q: 'Does Spendful force me to budget?',
        a: 'No. Spendful is not built around budgets or limits. It focuses on awareness and reflection.',
      },
    ],
  },
  {
    slug: 'privacy-first-expense-tracker',
    title: 'Privacy-First Expense Tracker',
    description:
      'Spendful is a privacy-first expense tracker for iPhone and Android. Core spending data stays on your device.',
    eyebrow: 'Private by design',
    hero: 'An expense tracker that does not need your bank data.',
    intro:
      'Spendful keeps core app data on your device. It is designed for people who want to understand spending without account setup, financial aggregation, ads, or noisy tracking inside the app.',
    keywords: ['privacy-first expense tracker', 'private spending tracker', 'local-first finance app'],
    sections: [
      {
        heading: 'Local App Data',
        body:
          'Your spending entries, recurring expenses, categories, journal notes, and settings are stored locally on your device unless you choose to export them.',
      },
      {
        heading: 'No Bank Connection',
        body:
          'Spendful does not ask for bank credentials. That makes it a simpler choice for people who want to keep financial account access separate from a spending journal.',
      },
      {
        heading: 'Clear Optional Data Flows',
        body:
          'Optional AI receipt scanning, AI insights, currency conversion, and in-app purchases may use third-party services. The privacy policy explains those flows directly.',
      },
    ],
    faq: [
      {
        q: 'Where is my Spendful data stored?',
        a: 'Core Spendful app data is stored locally on your device. You can export your history as CSV or JSON.',
      },
      {
        q: 'Does Spendful sell spending data?',
        a: 'No. Spendful is designed as a local-first spending journal, and core spending entries are not sent to Spendful servers.',
      },
    ],
  },
  {
    slug: 'no-budget-spending-tracker',
    title: 'No-Budget Spending Tracker',
    description:
      'Spendful is a no-budget spending tracker for people who want awareness without strict limits, bank links, or financial pressure.',
    eyebrow: 'No strict budgets',
    hero: 'A spending tracker without budget pressure.',
    intro:
      'Spendful is for people who want to understand spending without turning every purchase into a rule. Track what happened, add context, and let awareness guide better decisions.',
    keywords: ['no-budget spending tracker', 'budgeting app alternative', 'spending tracker without budgets'],
    sections: [
      {
        heading: 'Awareness Before Rules',
        body:
          'Spendful helps you see where money goes before deciding what to change. Many people need clarity first, not another system to maintain.',
      },
      {
        heading: 'Simple Recurring Expenses',
        body:
          'Log everyday purchases and set up recurring entries for subscriptions or regular payments, then review them without spreadsheet work.',
      },
      {
        heading: 'A Calmer Finance Habit',
        body:
          'The app avoids pressure mechanics and complicated setup. It is a lightweight habit for people who want to feel less scattered around spending.',
      },
    ],
    faq: [
      {
        q: 'Can I track spending without a budget?',
        a: 'Yes. Spendful lets you track spending without creating budgets, limits, or bank rules.',
      },
      {
        q: 'Why use a no-budget spending tracker?',
        a: 'A no-budget tracker helps you understand real behavior first. That awareness can make future decisions easier without adding pressure.',
      },
    ],
  },
  {
    slug: 'receipt-scanner',
    title: 'Receipt Scanner for Spending Entries',
    description:
      'Spendful includes optional AI receipt scanning to extract purchase details and reduce manual entry in your spending journal.',
    eyebrow: 'Receipt scanning',
    hero: 'Scan receipts when typing gets in the way.',
    intro:
      'Spendful includes optional AI receipt scanning for moments when you want faster entry. Snap a receipt, review the extracted details, and keep your spending journal up to date.',
    keywords: ['receipt scanner app', 'AI receipt scanner', 'expense receipt scanner'],
    sections: [
      {
        heading: 'Faster Expense Entry',
        body:
          'Receipt scanning can extract details such as amount, date, merchant, and a suggested category so you spend less time typing.',
      },
      {
        heading: 'Optional By Design',
        body:
          'Spendful works without receipt scanning. You can always enter purchases manually when you prefer a fully offline flow.',
      },
      {
        heading: 'Part Of A Spending Journal',
        body:
          'Scanned receipts become part of your daily spending record, alongside notes, categories, recurring entries, and month views.',
      },
    ],
    faq: [
      {
        q: 'Does Spendful scan receipts?',
        a: 'Yes. Spendful offers optional AI receipt scanning to help extract purchase details from receipt images.',
      },
      {
        q: 'Do I have to use receipt scanning?',
        a: 'No. Receipt scanning is optional. The app works with manual spending entries.',
      },
    ],
  },
  {
    slug: 'ai-spending-insights',
    title: 'AI Spending Insights',
    description:
      'Spendful offers optional AI spending insights that turn recent entries into gentle reflections on spending patterns.',
    eyebrow: 'AI insights',
    hero: 'Gentle AI reflections on your spending patterns.',
    intro:
      'Spendful can generate optional AI insights from recent spending summaries. The goal is to help you notice patterns, not to judge purchases or give financial advice.',
    keywords: ['AI spending insights', 'AI expense tracker', 'AI spending tracker'],
    sections: [
      {
        heading: 'Pattern Recognition',
        body:
          'AI insights can summarize recent categories, notes, and spending rhythm so you can see what changed and what stayed consistent.',
      },
      {
        heading: 'Designed To Feel Gentle',
        body:
          'Spendful insights are written as reflections. They are not financial advice, and they are not built to shame or optimize every choice.',
      },
      {
        heading: 'Optional Internet Feature',
        body:
          'The core app works without AI. Insights require an internet connection and send a limited spending summary to the AI provider only when requested.',
      },
    ],
    faq: [
      {
        q: 'What are AI spending insights?',
        a: 'AI spending insights are optional reflections generated from recent spending summaries. They help you notice patterns in categories, notes, and timing.',
      },
      {
        q: 'Is Spendful financial advice?',
        a: 'No. Spendful is a personal awareness tool, not financial advice.',
      },
    ],
  },
] as const

export const SITE_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  ...SEO_LANDING_PAGES.map((page) => ({ path: `/${page.slug}/`, priority: page.slug === 'about' ? '0.8' : '0.9', changefreq: 'monthly' })),
  { path: '/questions/', priority: '0.8', changefreq: 'monthly' },
  { path: '/support/', priority: '0.5', changefreq: 'yearly' },
  { path: '/privacy/', priority: '0.4', changefreq: 'yearly' },
  { path: '/terms/', priority: '0.4', changefreq: 'yearly' },
]

export function makeOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    email: SITE.email,
    sameAs: [SITE.appStoreUrl, SITE.playStoreUrl],
  }
}

export function makeWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  }
}

export function makeMobileApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    downloadUrl: [SITE.appStoreUrl, SITE.playStoreUrl],
    installUrl: [SITE.appStoreUrl, SITE.playStoreUrl],
    screenshot: [
      absoluteUrl('/og.png'),
      absoluteUrl('/apple-touch-icon.png'),
    ],
    featureList: [
      'Daily spending journal',
      'Manual expense tracking',
      'Recurring spending entries',
      'Custom categories',
      'CSV and JSON export',
      'Optional AI receipt scanning',
      'Optional AI spending insights',
      'No bank account connection required',
    ],
  }
}

export function makeWebPageSchema({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
    about: {
      '@type': 'MobileApplication',
      name: SITE.name,
      url: SITE.url,
    },
  }
}

export function makeFAQSchema(faq: readonly { q: string; a: string | readonly string[] }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: Array.isArray(item.a) ? item.a.join(' ') : item.a,
      },
    })),
  }
}

export function makeBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
