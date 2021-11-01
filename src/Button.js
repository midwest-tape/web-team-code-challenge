export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-700 text-white px-8 py-2 rounded shadow font-semibold mx-4 hover:shadow-large hover:bg-blue-800 disabled:bg-gray-500 disabled:hover:bg-gray-600"
      {...props}
    >
      {children}
    </button>
  );
}
