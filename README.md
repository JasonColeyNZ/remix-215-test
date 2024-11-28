# Welcome to my Remix buggy app?

I have a promise in the clients route which waits three seconds and resolves

Then I have a couple of client links, with two routes below them.

If you click this Links then you will see the clients 3sec being observed in each route navigation, why? nothing is changing on this route path so why is the loader being re-run.

Also I have a promise in the loader with a Suspense/Await in the route component, so why is this not working, I would expect to see the Loading... then the message Finished Loading after the 3 seconds?

## Development

Run the dev server:

```shellscript
npm run dev
```
