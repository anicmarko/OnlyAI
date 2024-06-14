import { createRouteMatcher, clerkMiddleware } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([
  '/dashboard','/api/webhook ','/image', '/code','/video','/music','/conversation',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) 
    auth().protect();
});


export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};