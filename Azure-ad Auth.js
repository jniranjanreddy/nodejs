const express = require("express");
const passport = require("passport");
const AzureOAuth2Strategy = require("passport-azure-ad-oauth2");
const session = require("express-session");
const axios = require("axios");

const app = express();
const PORT = 8000;

const CLIENT_ID = "";
const CLIENT_SECRET = "";
const TENANT_ID = "";
const AUTHORITY = `https://login.microsoftonline.com/${TENANT_ID}`;
const REDIRECT_URI = "http://localhost:8000/auth/callback";
const SCOPES = ["openid", "profile", "email"];

app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new AzureOAuth2Strategy(
        {
            clientID: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            callbackURL: REDIRECT_URI,
            authorizationURL: `${AUTHORITY}/oauth2/v2.0/authorize`,
            tokenURL: `${AUTHORITY}/oauth2/v2.0/token`,
            scope: SCOPES.join(" "),
        },
        async (accessToken, refreshToken, params, profile, done) => {
            try {
                const userInfo = await axios.get("https://graph.microsoft.com/v1.0/me", {
                    headers: { Authorization: `Bearer ${accessToken}` },
                });
                return done(null, { ...userInfo.data, accessToken });
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

app.get("/login", passport.authenticate("azure_ad_oauth2"));

app.get(
    "/auth/callback",
    passport.authenticate("azure_ad_oauth2", { failureRedirect: "/login" }),
    (req, res) => {
        res.send(`<h1>Azure AD Authentication Successful!</h1>
                  <p>Welcome, ${req.user.displayName}!</p>
                  <p><strong>Access Token:</strong> ${req.user.accessToken}</p>`);
    }
);

app.get("/protected", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    res.json({ message: "You are authenticated!", user: req.user });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
