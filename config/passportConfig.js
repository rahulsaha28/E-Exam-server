import passport from "passport";
import { Strategy } from "passport-local";

// configure passport to use local strategy
passport.use(
  new Strategy((username, password, done) => {
    try {
    } catch (error) {
      done(error);
    }
  })
);

// serilized user into the session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// deserilized user from the session
passport.deserializeUser((user, done) => {});
