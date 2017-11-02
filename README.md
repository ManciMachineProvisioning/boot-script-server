# Boot Script server

![Welcome screen](/screenshots/welcome_small.png)

Contains the logic for serving the appropriate boot script for the host. It is only an early PoC version with a lot of implementation details missing but the very bare essentials suitable for demos are present.

You can see it in action here:
https://www.youtube.com/watch?v=dhrCYdidNVo

The general idea for this project is to provide a simple way for new users at an institution to automatically install and configure their machines using the following steps:

1. User receives his/her new computer and unpacks it.
2. Let the computer boot from the network.
3. If the computer is not yet known by the server it gets sent a live image which contains only a browser that will automatically visit the provisioning wizard site hosted by this component. Computer details (manufacturer, product, serial, mac address) are sent to the server in order to determine the appropriate OS installation packages for it.
4. Authentication is required from the user to proceed. The authentication mechanism is supposed to be pluggable and specific to the organization.
5. After successful authentication the user confirms his/her details and chooses a suitable OS from the list.
6. Clicking on the apply and reboot button will assign the computer to the logged in user in asset management (can also do any other arbitrary actions) and then reboot the machine immediately.
7. The user boots into the OS installation of his/her choosing.

## Running

```
npm install
gulp
```

The server should be running at port 3000 after issuing these commands.

## External projects

Built on:
https://expressjs.com/
http://getbootstrap.com/
https://github.com/petecoop/generator-express
and others.

Includes portions of the following projects:
https://www.froala.com/design-blocks
https://github.com/PolymerElements/font-roboto-local


## Logo design

[Logo vector created by Freepik](https://www.freepik.com/free-photos-vectors/logo)
