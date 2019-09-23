import { auth } from "@/database";

// Nav Guard
export const routerGuard = (to, from, next) => {
  // console.log(auth.currentUser);
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!auth.currentUser) {
      // Go to login
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (auth.currentUser) {
      // Go to login
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.logout)) {
    if (auth.currentUser) {
      auth.signOut().then(() => {
        next({ path: "/", query: { redirect: to.fullPath } });
      });
    }
  } else {
    // Proceed to route
    next();
  }
};
