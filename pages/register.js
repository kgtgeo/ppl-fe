import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Register() {
    return (
        <div>
            <Head>
                <title>Register Page</title>
                <meta name="description" content="Register page" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white flex w-2/3 max-w-6xl">
                    <div className="bg-black w-3/5 p-5 text-white py-36 px-12">
                        <div className="text-left font-bold ">
                            Logo
                        </div>
                        <div className="py-10">

                        </div>
                        <h2 className="text-3xl font-bold mb-2">Lorem ipsum dolor sit</h2>
                        <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec luctus lorem..</p>
                    </div>
                    <div className="w-2/5 text-black py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2">Register</h2>
                        <a href="#" className="border-2 border-black py-2 px-12 font-semibold hover:bg-gray hover:text-white">Submit</a>
                    </div>
                </div>

                <div>
                    <div>
                        <form action="/send-data-here" method="post">
                            <label for="email">E-mail:</label>
                            <input type="text" id="email" name="email" />

                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username" />

                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" />

                            <label for="password">Confirm Password:</label>
                            <input type="password" id="confirm" name="confirm" />
                          
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}