"use client";

export default function Login() {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="max-w-[80w] w-full h-full flex flex-col items-center justify-center p-2">
                <h1 className="mb-4 text-2xl">MasterBits</h1>
                <h2>Sign in</h2>
                <p>Access your account now!</p>
                <form className="flex flex-col gap-2 mt-4" action="">
                    <input
                        className="rounded-md p-2 justify-center"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username or email"
                    />
                    <input
                        className="rounded-md p-2 justify-center"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                    <input
                        className="col-span-full mt-4 p-2 bg-teal-500 rounded-md text-white font-medium transition duration-500 hover:bg-teal-700"
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}
