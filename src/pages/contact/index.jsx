import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { CONTACTS } from "../../util";

export default function Contact() {
  const params = useParams();

  const contacts = useMemo(() => {
    return CONTACTS.find((x) => x.id === +params.id);
  }, [params.id]);

  return (
    <div>
      <h1>Contact page</h1>

      <h2>**** {contacts.name}</h2>
      <p>{contacts.phone}</p>
    </div>
  );
}
