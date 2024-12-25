export default function Form() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="shadow-md rounded-lg px-8 py-4 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome!</h1>
        <form action="#">
          <div className="mb-4">
            <input
              type="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-primary focus:border-primary"
              placeholder="username"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-primary focus:border-primary"
              placeholder="password"
              required
            />{" "}
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryButton hover:bg-secondaryButton focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <p className="flex text-black font-bold p-4">
            <span>Don&apos;t have account yet? </span>
            <span className="ml-2">
              <a
                href="/pages/register"
                className="text-primaryText hover:text-secondaryText font-bold"
              >
                Register here
              </a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
