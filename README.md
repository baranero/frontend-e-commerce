# frontend-e-commerce

## Overview

This project is a comprehensive e-commerce platform designed for managing multiple stores and products through a robust admin dashboard.

## Key Features

- **Admin Dashboard**: Utilizing Shadcn UI for seamless management of CMS, Admin, and API.
- **Multi-Vendor/Store Management**: Manage different stores (e.g., shoe, laptop, suit stores) with individual API routes.
- **Product Management**: Capabilities to create, update, and delete products.
- **Image Management**: Upload and manage multiple images for products.
- **Filter Management**: Create, update, and delete filters like color and size.
- **Billboard Management**: Create and manage billboards, attachable to categories or standalone.
- **Advanced Search and Pagination**: Search through categories, products, filters, and billboards.
- **Featured Products**: Highlight products on the homepage.
- **Sales and Orders Monitoring**: View orders, sales, and detailed analytics.
- **Revenue Graphs**: Visual representation of revenue.
- **Clerk Authentication**: Secure user authentication system.
- **Stripe Integration**: Implementing Stripe checkout and webhooks.
- **Database Management**: Using MySQL with Prisma and PlanetScale.

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-ecommerce-store.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_API_URL=
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
