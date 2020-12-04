function Ring() {
  return (
    <div className="bg-white p-10 rounded flex justify-between">
      <button
        type="button"
        className="bg-blue-500 items-center px-5 py-2 rounded text-white inline-flex focus:outline-none focus:ring-2 ring-blue-200 hover:bg-blue-600"
      >
        Submit
      </button>

      <a
        href="#"
        className="px-5 py-2 focus:outline-none bg-red-400 rounded items-center text-white inline-flex hover:bg-red-700 focus:ring-2 ring-red-300"
      >
        Oke
      </a>
    </div>
  );
}

export default Ring;
