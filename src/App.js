
import SimpleContactUs from "./components/forms/SimpleContactUs";
import ThreeColSimpleWithImage from "./components/blogs/ThreeColSimpleWithImage";
import AnimationRevealPage from "./plugins/AnimationRevealPage";

const App = () =>  {
  return (
      <AnimationRevealPage>
          <SimpleContactUs/>
          <ThreeColSimpleWithImage/>
          <div
              className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                      <p className="text-lg text-black font-semibold">
                          Erin Lindford
                      </p>
                      <p className="text-gray-500 font-medium">
                          Product Engineer
                      </p>
                  </div>
                  <button
                      className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message
                  </button>
              </div>
          </div>
      </AnimationRevealPage>
  );
}

export default App;
