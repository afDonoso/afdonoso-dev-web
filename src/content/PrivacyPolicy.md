---
title: Privacy Policy
description: "How Chronica handles your information: no account, no analytics, and your reading data stays on your device."
lastUpdated: "2026-10-03"
---

Chronica ("the app", "we", "us") is built to be private by default. This policy explains what the app does and does not do with your information.

## The short version

- Chronica has no account and no login in this version. You use it anonymously.
- Your reading data — your shelves, reading sessions, chapter notes, ratings, and goals — is stored on your device.
- We do not sell your data, show you ads, or track you across other apps or websites.
- To protect our book search from abuse, each installation of the app registers an anonymous device key with our server. It identifies the installation, not you — see [Device verification](#device-verification).

## What stays on your device

Everything you create in Chronica is stored locally on your device using Apple's on-device storage:

- The books on your shelves and their status (reading, owned, wishlist, finished)
- Reading sessions, progress, and chapter notes
- Ratings and finished dates
- Your reading goals and streak history
- App preferences (such as the haptics setting)

We cannot see this data. It never leaves your device except as described below.

## On-device AI

Some features, such as suggested word definitions, may use Apple Intelligence — Apple's on-device AI system — to generate a suggestion. This processing happens locally on your device using Apple's on-device models; the request is not sent to us or to any third party.

## iCloud sync

Chronica offers optional iCloud sync as part of the Gilt Edition. **It is off unless you turn it on**, in the You tab under Preferences → iCloud Sync.

When it is on, your reading data is synchronized through **your own private iCloud account** so it can move between your devices. It goes to Apple, not to us: the data is stored in your account's private CloudKit database, we have no access to its contents, and Apple's handling of it is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

What syncs: the books on your shelves, reading sessions, chapter notes, and your other notes. What does not sync, and stays on the device it was made on: your theme and app icon, reading reminders, cached cover images, and your name.

You can turn sync off at any time — your books stay on your device when you do. **Delete iCloud copy**, on the same screen, removes Chronica's data from your iCloud account without touching the copy on your device.

## What is sent to servers

To help you find and add books, the app sends **book search queries and book identifiers** (such as a title, author name, or ISBN) to:

- **Our own book service**, which returns book details and cover information
- **ISBNdb**, the third-party book catalogue our service looks books up in. ISBNdb receives your search from our server, not from your device. Cover images are the exception: the app downloads them directly from ISBNdb's image servers, which see your IP address the way any website does.

These requests contain only what is needed to look up a book, plus the access token described under [Device verification](#device-verification). They do **not** include your name, your identity, or the contents of your personal shelves, notes, or goals.

## Device verification

Chronica's book search is served by our own API. To stop that API being abused by automated traffic — which would exhaust the third-party book data quotas the app depends on — each installation registers itself using Apple's App Attest service.

When you first search, your device creates a cryptographic key that never leaves its secure hardware, and that we never have access to. We store the key's public half, an identifier for it, and the dates the installation registered and last connected. We also process your IP address to apply rate limits.

This information identifies an installation of the app, not you. It is not linked to your name, your Apple ID, or your reading data, and it is never used for advertising, analytics, or tracking across apps or websites. Your shelves, reading sessions and notes remain on your device and in your own iCloud account, and are not part of this.

**Why we may do this (UK/EU users):** our legitimate interest in keeping the service secure and available, under Article 6(1)(f) GDPR.

**How long we keep it:** a device record is deleted automatically after 12 months without any connection. Because the record is not linked to you, we cannot find a particular person's record on request; if you delete the app, its record stops being used and is removed 12 months later.

## Service providers

These companies process data on our behalf to run the book service:

- **Cloudflare** — sits in front of our servers to protect them from abuse. It handles every request to our book service, including your IP address.
- **Railway** — hosts our book service and its database, including the device records described above.
- **ISBNdb** — provides book details and covers. It receives search terms from our server, and your IP address when the app downloads a cover image from it. It never receives your device key.

## What we do not do

- We do not require or store an account, email, or password in this version.
- We do not use third-party analytics or advertising SDKs.
- We do not track you across other apps or websites.
- We do not sell or rent your personal information to anyone.

## Deleting your data

You are always in control of your data:

- **Delete all books** removes every book and all reading history from your device.
- **Reset all data** returns the app to a fresh-install state, erasing your library, goals, and preferences.

Because your data lives on your device (and, if enabled, in your own iCloud), deleting it removes it.

## Children

Chronica is not directed to children under 13, and we do not knowingly collect personal information from children.

## Changes to this policy

We may update this policy as the app evolves. When we do, we will revise the "Last updated" date above. Material changes will be reflected in the app.

## Contact

Questions about this policy? Contact us at chronica-support@afdonoso.dev.

---

**Owner / legal entity:** Andres Felipe Donoso Diaz
