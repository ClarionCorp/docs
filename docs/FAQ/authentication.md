---
sidebar_position: 1
slug: 'authentication'
---

# Authenticated Endpoints

You may have seen that some endpoints here require authentication. I didn't really want to have to do that, but the main CC website relies on this API now, so I can't risk being rate limited upstream.

The only endpoints that require this authentication are ones that make upstream requests to the Prometheus Proxy in some way. Anything cached, or locally saved by us, should not require authentication.


## Obtaining a Token

It's a very simple and primitive method of token management. Basically, just reach out to me *(blals)* on [Discord](https://clarioncorp.net/discord), explain what your usage is for, and about how many requests you plan on making each day. Then, I will generate you a token and send it back. Just make sure to use it on server-side applications or SSR pages only. It never expires unless I invalidate it myself.

## Using a Token

Great! Now that you have a valid token, just add this header to your requests: `Authorization: Bearer <token>`. Or like this in a Typescript `Fetch` Function:
```ts
headers: { 'Authorization': `Bearer ${process.env.PRIVATE_API_TOKEN}` }
```

The `Bearer` there is required, and I highly recommend storing your token in a `.env` file. If I find your token floating around online, or it has a huge surge of requests from various origins, I will contact you and possibly revoke your token.

If you absolutely require a ton of requests, or zero downtime, I suggest exploring the [Prometheus Proxy](/docs/category/prometheus-proxy) directly yourself. We will hopefully have better documentation on it soon.