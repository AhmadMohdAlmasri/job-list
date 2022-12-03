import { initializeApp } from 'firebase/app';

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';
import { Vacancy } from '../../components/card-component/card.component';

// export type JobTp = {
//   id: number;
//   company: string;
//   logo: string;
//   new: Boolean;
//   featured: Boolean;
//   position: string;
//   role: string;
//   level: string;
//   postedAt: string;
//   contract: string;
//   location: string;
//   languages: string[];
//   tools: string[];
// };

// export type JobListTp = JobTp[];

const firebaseConfig = {
  apiKey: 'AIzaSyDAotTEgf_Nll0hvBkM84ydvWMFD8lhY_s',
  authDomain: 'joblist-aacb9.firebaseapp.com',
  projectId: 'joblist-aacb9',
  storageBucket: 'joblist-aacb9.appspot.com',
  messagingSenderId: '629482604749',
  appId: '1:629482604749:web:1fe5e9932f2dba9226c184',
};

const firebaseApp = initializeApp(firebaseConfig);
type Object = {
  title: string;
  vacancies: Vacancy[];
};
type ObjectsToAdd = Object[];
export const db = getFirestore();

// --------------------------------------------

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: ObjectsToAdd) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object: Object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // const docRef = doc(collectionRef);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

// ------------------------------------------

export const getCategoriesAndDocuments = async (): Promise<Vacancy[]> => {
  const collectionRef = collection(db, 'JobList');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  // return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Vacancy);
  const vacancies = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { vacancies } = docSnapshot.data();
    // console.log(obj);
    acc.push(...vacancies);
    return acc;
  }, [] as Vacancy[]);

  // console.log(vacancies);
  return vacancies;
};
