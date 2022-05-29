# Yellow Swan 🦢

In this project we'll use - 
- React
- MUI
- Firebase
    - Firestore
    - Authentication
    - Storage
    - App Check
- TypeScript
---
This project is a Book Library where we can create books and share with others.
- You can search Books by - title, author, date published / range, genre, ratings.
- Create your own book.
- Check views of your books (analytics).
---
So let's start by creating a vite project
> `npm create vite@latest`

*Create a fb.config.ts file for your own project*
like this
```typescript
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {} // your configuration object 

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const fireStore = getFirestore(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app)
```

