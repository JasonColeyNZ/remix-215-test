# Welcome to my Remix buggy app?

I have a promise in the clients route which waits three seconds and resolves

Then I have a couple of client links, with two routes below them.

Run the test app, then click refresh on browser, then navigate to the clients route, navigate to the client 1 and client 2, you will see the clients 3sec being observed in each route navigation, why? nothing is changing on this route path so why is the loader being re-run.

I have also noticed that if I save changes (sometimes) in VSCode, that sometimes the clients loader stops reloading on each navigation, then if I refresh the page (in the browser) it goes back to loading the clients loader again on navigation.

## Development

Run the dev server:

```shellscript
npm run dev
```
