import { Await, Link, Outlet, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

export default function Contacts() {
  const { contacts } = useLoaderData();

  return (
    <div>
      <h1>Contacts page</h1>
      <Suspense fallback={<div>Loading</div>}>
        <Await resolve={contacts} errorElement={<div>Could not load reviews 😬</div>}>
          {(contacts) =>
            contacts.map((contact) => (
              <Link key={contact.id} to={`/contacts/${contact.id}`}>
                <h2>{contact.name}</h2>
                <p>{contact.phone}</p>
              </Link>
            ))
          }
        </Await>
      </Suspense>
      <Outlet />
    </div>
  );
}
