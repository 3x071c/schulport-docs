---
sidebar_position: 4
---

# Development

## Requirements

This bot is written in [TypeScript](https://www.typescriptlang.org/), a typed superset of JavaScript. Some scripts included with this repository will probably not work on Windows ([m](https://tinyurl.com/nuub2bq)[y](https://tinyurl.com/y2emej63)[ ](https://tinyurl.com/y2lzznux)[c](https://tinyurl.com/y3v8vo5a)[o](https://tinyurl.com/y4qcfkw3)[n](https://tinyurl.com/y5gm9ysv)[d](https://tinyurl.com/y69uplwl)[o](https://tinyurl.com/yygc57ta)[l](https://tinyurl.com/yynoa7ql)[e](https://tinyurl.com/y3shavwn)[n](https://tinyurl.com/yxladmrj)[c](https://tinyurl.com/y3yxymqr)[e](https://tinyurl.com/y2c6alo5)[s](https://tinyurl.com/y5qtqr6p)). Make sure you have a recent `node` and `npm` version installed before proceeding (Install the latest non-LTS node version for development [here](https://nodejs.org/)).

## Environment

Using [Visual Studio Code](https://code.visualstudio.com) is **highly** recommended. Extensions and configurations are automatically applied, so linting and formatting will work effortlessly out-of-the-box.

## Setup

This project uses [pnpm](https://pnpm.io/) as a package manager. Install it with `npm install -g pnpm@latest`, and install this repository's dependencies by running `pnpm i` in the root. A hot-reloading development environment can be started with `pnpm dev`. For production deployments, a `pnpm prod` script is included (also see the [scripts](#scripts) section).

## Scripts

Reminder: prefix all of these scripts with `pnpm`/`pnpm run`!

-   `sync|commit|...`: These scripts are related to git operations and are explained in the Contributing guide
-   `dev`: Starts a hot-reloading development environment
-   `web`: Builds a production-ready website
-   `native`: Builds a production-ready native app (Important: run `web` before this!)
-   `deploy`: Build both `web` and `native` output
-   `format`: Automatically formats all code, and reports issues
-   `lint`: Reports code style issues
-   `new`: Set up the project after the initial clone
-   `test`: Run code testing tools

## Tech Stack

-   [Git](https://git-scm.com/) - Version control
-   [Editorconfig](https://editorconfig.org/) - IDE file style consistency
-   [Prettier](https://prettier.io/) - Code formatting
-   [ESLint](https://eslint.org/) - JavaScript linting
-   [Stylelint](https://stylelint.io/) - CSS style linting
-   [GitHub Actions](https://github.com/features/actions) - CI/CD
-   [GitPod](https://www.gitpod.io/) - reproducible dev environments
-   [NodeJS](https://nodejs.org/en/) - Server-side JavaScript
-   [pnpm](https://pnpm.io/) - Package manager
-   [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript superset/compiler
-   [React](https://reactjs.org/) - Declarative, component-based, reactive UI library
-   [NextJS](https://nextjs.org/) - React framework
-   [PostCSS](https://postcss.org/) - CSS preprocessor
-   [Capacitor](https://capacitorjs.com/) - Hybrid-web app wrapper/API
-   [Ionic](https://ionicframework.com/) - Native-feel React UI components
-   [TailwindCSS](https://tailwindcss.com/) - Modern, utility-first compiled CSS framework
-   [jotai](https://jotai.pmnd.rs/) - React modular state management
-   [Vercel](https://vercel.com/) - Automatic deployments
-   [Jest](https://jestjs.io/) - Unit testing
-   [testing-library](https://testing-library.com/) - Integration testing for React
-   [Cypress](https://www.cypress.io/) - End-to-End testing
