import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    <h2>Dashboard</h2>
    <p>hello, how are you?</p>

    <div className="flex justify-center my-8">
      <Link href="/tickets">
        <button className="btn-primary">View Tickets</button>
      </Link>
    </div>

    <h2>Company Updates</h2>

    <div className="card">
      <h3>New member of the web dev team...</h3>
      <p> Welcome.</p>
    </div>
    <div className="card">
      <h3>New website live!</h3>
      <p>wait for us.</p>
    </div>
  </main>
  );
}
