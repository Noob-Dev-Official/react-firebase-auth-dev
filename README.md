# Getting Started with Create React App

The react firebase app is compatible to versions lower than v9.

# File structure

` src/contexts/AuthContext.js ` - Contains all the functions for:

1. Signing In
2. Signing Out
3. Signing Up
4. Resetting Password
5. Updating Email
6. Updating Password
7. Getting current user info

# Note:
- v9 has a little update. In `src/firebase.js`, make sure to use the following imports in line 1 and 2:

```js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
```
