import Button from "../components/Button";
import styles from "../style";

const Login = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex flex-row">
    <div class="w-full max-w-xs ">
  <form class="bg-black-gradient shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div>
    <h2 className={styles.heading2}>Login</h2>
     
    </div>
    <div class="mb-4">
      <label class="block text-white text-sm mb-2 font-poppins font-normal  text-[20px] leading-[30.8px]" for="email">
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email" type="email" placeholder="Enter your email"/>
    </div>
    <div class="mb-4">
      <label class="block text-white text-sm mb-2 font-poppins font-normal  text-[20px] leading-[30.8px]" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password" type="password" placeholder="Enter your password"/>
    </div>
    <div class="mb-6">
      <label class="block text-white text-sm mb-2 font-poppins font-normal  text-[20px] leading-[30.8px]" for="confirmPassword">
        Confirm Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="confirmPassword" type="password" placeholder="Confirm your password"/>
    </div>
    <div class="flex items-center justify-between">
      <button
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium  text-[18px] text-primary outline-none ${styles}`}
        type="button">
        Register
      </button>
    </div>
  </form>
</div>

    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    </div>
  </section>
  )
}

export default Login;
