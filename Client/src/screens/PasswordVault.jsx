import styles, { layout } from "../style"
import Button from "../components/Button"
import { useState } from "react"


const PasswordVault = () => {

const [password,setPassword] = useState('')
const [websiteTitle, setWebsiteTitlle] = useState('')

  return (
    <section id="features" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="App">
        <div className="AddingPassword"> <div className={layout.sectionInfo}>
            
            <h2 className={styles.heading2}>
            Password Vault
            </h2>
      
            <form class="bg-black-gradient shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div>
         
          </div>
          <div class="mb-4">
          
          </div>
          <div class="mb-4">
            <label class="block text-white text-sm mb-2 font-poppins font-normal  text-[20px] leading-[30.8px]" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="Enter your password"/>
          </div>
          <div class="mb-6">
            <label class="block text-white text-sm mb-2 font-poppins font-normal  text-[20px] leading-[30.8px]" for="Website">
              Website
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Website" type="password" placeholder="Enter Your Website"/>
          </div>
          <div class="flex items-center justify-between">
            <button
              className={`py-4 px-6 bg-blue-gradient font-poppins font-medium  text-[18px] text-primary outline-none ${styles}`}
              type="button">
              Add Password 
            </button>
          </div>
        </form>
      
            
          
          </div>
      </div>
    </div>
    
       
        
      </section>
  )
}

export default PasswordVault


