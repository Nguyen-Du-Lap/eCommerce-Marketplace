This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


#### Success Response
```json
{
    "code": 1000,
    "message": "Product retrieved successfully",
    "result": {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "name": "Product Name",
        "price": 99.99
    }
}
```

#### Error Response
```json
{
    "code": 1020,
    "message": "Post not existed",
    "result": null
}
### Error Code Table

| Code | Error Code | Description | HTTP Status |
|------|------------|-------------|-------------|
| 9999 | UNCATEGORIZED_EXCEPTION | Uncategorized error | 500 |
| 1001 | INVALID_KEY | Invalid key | 400 |
| 1002 | USER_EXISTED | User already exists | 400 |
| 1003 | USERNAME_INVALID | Username must be at least {min} characters | 400 |
| 1004 | INVALID_PASSWORD | Password must be at least {min} characters | 400 |
| 1005 | USER_NOT_EXISTED | User not found | 404 |
| 1006 | UNAUTHENTICATED | Unauthenticated | 401 |
| 1007 | UNAUTHORIZED | Permission denied | 403 |
| 1008 | INVALID_DOB | Age must be at least {min} | 400 |
| 1009 | CANNOT_CREATE_TOKEN | Token creation failed | 401 |
| 1010 | PATH_NOT_EXISTED | Path not found | 404 |
| 1011 | TYPE_NOT_EXISTED | Type not found | 400 |
| 1012 | TITLE_BLANK_INVALID | Title cannot be blank | 400 |
| 1013 | CONTENT_BLANK_INVALID | Content cannot be blank | 400 |
| 1014 | TYPE_BLANK_INVALID | Type cannot be blank | 400 |
| 1015 | TITLE_INVALID | Title exceeds maximum length | 400 |
| 1016 | CONTENT_INVALID | Content exceeds maximum length | 400 |
| 1017 | NAME_BLANK_INVALID | Name cannot be blank | 400 |
| 1018 | DESCRIPTION_BLANK_INVALID | Description cannot be blank | 400 |
| 1019 | DATE_INVALID | Invalid date format | 400 |
| 1020 | POST_NOT_EXISTED | Post not found | 404 |
| 1021 | PARAMETER_NOT_CORRECT | Invalid parameter | 400 |
