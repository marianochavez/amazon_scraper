import * as admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const serviceAccount: admin.ServiceAccount = {
    clientEmail: process.env.ADMIN_CLIENT_EMAIL,
    projectId: process.env.ADMIN_PROJECT_ID,
    privateKey: process.env.ADMIN_PRIVATE_KEY ? process.env.ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
}

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export {adminDb}