import * as React from "react";
import { firestore } from "firebase";

const useFirestoreQuery = <T extends firestore.DocumentData>(
  query: firestore.Query,
): [T[], boolean, Error | null] => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [docs, setDocs] = React.useState<T[]>([]);

  React.useEffect(() => {
    const unsubscribe = query.onSnapshot(
      (querySnapshot: firestore.QuerySnapshot) => {
        setIsLoading(false);
        setDocs(
          querySnapshot.docs.map(doc => ({
            _id: doc.id,
            ...(doc.data() as T),
          })),
        );
      },
      (err: Error) => {
        setError(err);
      },
    );

    return () => unsubscribe();
  }, []);

  return [docs, isLoading, error];
};

export default useFirestoreQuery;
