const { default: Ring } = require('../components/Ring');

function index() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-5/12 shadow-2xl">
        <Ring></Ring>
      </div>
    </div>
  );
}

export default index;
