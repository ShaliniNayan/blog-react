import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Post {id}</h1>
      <p className="mt-4">This is the detailed view of the post.</p>
    </div>
  );
}
