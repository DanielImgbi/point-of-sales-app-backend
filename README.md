http://point-of-sales-app-api.onrender.com/

The api has 3 basic resources and all can be accessed only by signed in users except the auth resource.

all request apart from authentication, should be attached with authorization token.

1. auth (/auth): the auth resource has two end points for signing up (/auth/signup) and loging in (/auth/login) users.

both end point(signup & login) returns an authorization token which should be added to all other request.

2. admin (/admin): the admin resource for now, has three end points for posting i.e. adding, deleting i.e removing, and patching i.e updating the menu. perhaps other end point(s) might be added as the need may be.

- post - (/admin/menu)
- delete - (/admin/menu/id)
- patch - (/admin/menu/id)

the admin resource is protected and restricted to admin alone. only admin can add menus, delete menus, update menus, signup and remove users(moderators).

3. menu (/menu): the menu resource has two end points. /menu/ for getting all menus and /menu/id for getting a single menu.
