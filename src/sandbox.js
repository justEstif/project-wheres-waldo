import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./firebase-config";

const Random = () => {
  const [countries, setCountries] = useState([]);
  const countryCollectionRef = collection(db, "country-positions");

  useEffect(() => {
    const getCountry = async () => {
      const data = await getDocs(countryCollectionRef);
      setCountries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  }, []);
};

}

{
import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
