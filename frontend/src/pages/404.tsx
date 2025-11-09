export default function NotFound() {
  return (
    <h1 className="flex flex-col items-center justify-center h-screen bg-black">
      <span className="text-2xl font-semibold text-red-500">
        404 - Page Not Found
      </span>
      <span className="font-semibold text-yellow-300">{"<codeproject />"}</span>
    </h1>
  );
}
