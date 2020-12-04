import { useEffect } from 'react';

function index() {
  const selectTheme = (props) => {
    localStorage.setItem('theme', props);
    document.querySelector('html').classList.add(localStorage.getItem('theme'));
    if (props == 'dark') {
      document.querySelector('html').classList.remove('light');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
    localStorage.removeItem('theme');
  }, []);
  return (
    <div className="antialiased flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
      <div className="w-5/12">
        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded mb-6 flex items-center justify-between">
          <div className="font-semibold text-lg text-gray-800 dark:text-white">
            Switcher
          </div>
          <div>
            <button
              onClick={() => selectTheme('light')}
              className="w-4 h-4 focus:outline-none bg-gray-200 rounded-full mr-2"
            ></button>
            <button
              onClick={() => selectTheme('dark')}
              className="w-4 h-4 focus:outline-none bg-black rounded-full"
            ></button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded">
          <div className="px-10 py-8">
            <h1 className="text-2xl font-bold dark:text-white text-gray-800">
              Lorem, ipsum dolor.
            </h1>
            <div className="leading-relaxed dark:text-gray-300 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque et excepturi laborum illo alias praesentium facere iste
              assumenda minus magni accusamus corrupti qui neque, nulla
              voluptates consequatur, ipsam, perspiciatis quod?
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 px-10 py-6 border-t dark:text-gray-200 dark:border-gray-900 border-gray-200">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
