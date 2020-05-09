const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '367884202943-mt6phu02mv7brahn2m99mjdjllc469tg.apps.googleusercontent.com',
    clientSecret: 'e9BPjKqK0u4PtsQxTtVGSwcA',
    callbackURL: 'http://localhost:8000/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
  console.log(profile);
}));

// passport.use(new GoogleStrategy({
//     clientID: process.env.clientID,
//     clientSecret: process.env.clientSecret,
//     callbackURL: process.env.callbackURL,
// }, (accessToken, refreshToken, profile, done) => {
//   done(null, profile);
// }));

// serialize user when saving to session
passport.serializeUser((user, serialize) => {
  serialize(null, user);
});

// deserialize user when reading from session
passport.deserializeUser((obj, deserialize) => {
  deserialize(null, obj);
});