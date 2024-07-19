import { serverSideFunction } from "@/utils/server-utils";

function ServerRoute() {
  console.log("server route rendered");
  const result = serverSideFunction();
  return (
    <div>
      server route
      <p>{result}</p>
    </div>
  );
}

export default ServerRoute;
