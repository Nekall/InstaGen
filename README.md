# InstaGen
Redirection site for token generation

This is a ReactJS application that allows you to generate a long-lived token for the Instagram API quickly and securely*.

*No data is stored.

## Getting Started

### Prerequisites
You need to have created an application on https://developers.facebook.com with "Instagram Basic Display" activated and an instagram account connected and the rights given.

You must have added the redirect url (https://instagen.vercel.app/auth/) in "Client OAuth Settings" > "Valid OAuth Redirect URIs.
Like this:
![redirect uri](https://raw.githubusercontent.com/Nekall/InstaGen/main/src/assets/image/redirect-uri.png)

### Steps

- First step go to the page https://instagen.vercel.app/ and enter your cliend_id. and click on the Generate button.
- Second step a new browser tab opens, you must connect with your instagram account that has the rights and authorized the connection.
- Third step you will be brought back to the instagen site, and you will be able to fill in the client_id and client_secret to get your long-lived token.

And voilà !
